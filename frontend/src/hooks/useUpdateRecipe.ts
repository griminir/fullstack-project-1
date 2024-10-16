import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import Recipe from '../interfaces/Recipe';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Recipe>('/recipes');

const useUpdateRecipe = () =>
  useMutation({
    mutationFn: (updatedRecipe: Recipe) => apiClient.update(updatedRecipe),
    onError: (error) => {
      console.error(error);
    },
    onSettled: (_, error, variables) => {
      if (error) {
        console.error(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ['recipes'],
        });
        queryClient.invalidateQueries({
          queryKey: ['recipes', { id: variables.id }],
        });
      }
    },
  });

export default useUpdateRecipe;
