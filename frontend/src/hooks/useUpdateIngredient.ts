import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import APIClient from '../services/api-client';
import Ingredients from '../interfaces/Ingredients';

const apiClient = new APIClient<Ingredients>('/recipes');

const useUpdateIngredient = () =>
  useMutation({
    mutationFn: (updatedIngredient: Ingredients | Ingredients[]) =>
      apiClient.update(updatedIngredient, 'ingredients'),
    onError: (error) => {
      console.error(error);
    },
    onSettled: (_, error) => {
      if (error) {
        console.error(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ['recipes'],
        });
        queryClient.invalidateQueries({
          queryKey: ['ingredients'],
        });
      }
    },
  });

export default useUpdateIngredient;
