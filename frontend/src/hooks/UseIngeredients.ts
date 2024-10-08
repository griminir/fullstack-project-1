import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

export interface Ingredients {
  ingredientId: number;
  quantity: number;
  unit: string;
  name: string;
}

const apiClient = new APIClient<Ingredients>('/recipes');

const useIngredients = (id: number) =>
  useQuery({
    queryKey: ['/recipes', id, '/ingredients'],
    queryFn: () => apiClient.getAll(id, '/ingredients'),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useIngredients;
