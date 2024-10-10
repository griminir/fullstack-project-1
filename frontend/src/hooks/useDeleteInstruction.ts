import { useMutation } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Instruction } from './useInstructions';
import { queryClient } from '../main';

const apiClient = new APIClient<Instruction>('/recipes');

const useDeleteInstruction = () =>
  useMutation({
    mutationFn: (id: number) => apiClient.delete(id, 'instructions'),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('Instruction deleted');
    },
    onSettled: (_, error) => {
      if (error) {
        console.error(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ['instructions'],
        });
      }
    },
  });

export default useDeleteInstruction;