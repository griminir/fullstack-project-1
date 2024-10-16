import { useMutation } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { queryClient } from '../main';
import Instruction from '../interfaces/Instructions';

const apiClient = new APIClient<Instruction>('/recipes');

const useCreateInstruction = () =>
  useMutation({
    mutationFn: (newInstruction: Instruction | Instruction[]) =>
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
