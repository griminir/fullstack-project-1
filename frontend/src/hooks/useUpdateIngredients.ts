import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import APIClient from '../services/api-client';
import Ingredient from '../interfaces/Ingredient';

const apiClient = new APIClient<Ingredient>('/recipes');

const useUpdateIngredients = () =>
  useMutation({
    mutationFn: (updatedIngredient: Ingredient | Ingredient[]) =>
      apiClient.update(updatedIngredient, 'ingredients'),
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
          queryKey: ['ingredients'],
        });
      }
    },
  });

export default useUpdateIngredients;
