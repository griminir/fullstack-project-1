import { useMutation } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { queryClient } from '../main';
import Ingredients from '../interfaces/Ingredients';

const apiClient = new APIClient<Ingredients>('/recipes');

const useCreateIngredient = () =>
  useMutation({
    mutationFn: (newIngredient: Ingredients | Ingredients[]) =>
      apiClient.post(newIngredient, 'ingredients'),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('Ingredient created');
    },
    onSettled: (_, error) => {
      if (error) {
        console.error(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ['ingredients'],
        });
      }
    },
  });

export default useCreateIngredient;
