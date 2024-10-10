import { useMutation } from '@tanstack/react-query';
import { Instruction } from './useInstructions';
import APIClient from '../services/api-client';
import { queryClient } from '../main';

const apiClient = new APIClient<Instruction>('/recipes');

const useCreateInstruction = () =>
  useMutation({
    mutationFn: (newInstruction: Instruction) =>
      apiClient.post(newInstruction, 'instructions'),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('Instruction created');
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

export default useCreateInstruction;
