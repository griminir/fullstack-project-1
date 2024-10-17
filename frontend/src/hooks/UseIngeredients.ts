import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Ingredient from '../interfaces/Ingredient';

const apiClient = new APIClient<Ingredient>('/recipes');

const useIngredients = (id: number) =>
  useQuery({
    queryKey: ['ingredients'],
    queryFn: () => apiClient.getAll(id, '/ingredients'),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useIngredients;
