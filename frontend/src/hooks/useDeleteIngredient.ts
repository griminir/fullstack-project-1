import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import APIClient from '../services/api-client';
import Ingredient from '../interfaces/Ingredient';

const apiClient = new APIClient<Ingredient>('/recipes');

const useDeleteIngredient = () =>
  useMutation({
    mutationFn: (id: number) => apiClient.delete(id, 'ingredients'),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('Ingredient deleted');
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

export default useDeleteIngredient;
