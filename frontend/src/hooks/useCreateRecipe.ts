import { useMutation } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { queryClient } from '../main';
import Recipe from '../interfaces/Recipe';

const apiClient = new APIClient<Recipe>('/recipes');

const useCreateRecipe = () => {
  return useMutation({
    mutationFn: (newRecipe: Recipe) => apiClient.post(newRecipe),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      console.log('Recipe created with ID:', data[0].id);
      console.log(data);
    },
    onSettled: (_, error) => {
      if (error) {
        console.error(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ['recipes'],
        });
      }
    },
  });
};

export default useCreateRecipe;
