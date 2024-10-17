import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import APIClient from '../services/api-client';
import Instruction from '../interfaces/Instruction';

const apiClient = new APIClient<Instruction>('/recipes');

const useUpdateInstructions = () =>
  useMutation({
    mutationFn: (updatedInstruction: Instruction | Instruction[]) =>
      apiClient.update(updatedInstruction, 'instructions'),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {},
    onSettled: (_, error) => {
      if (error) {
        console.error(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ['recipes'],
        });
        queryClient.invalidateQueries({
          queryKey: ['instructions'],
        });
      }
    },
  });

export default useUpdateInstructions;
