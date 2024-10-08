import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

export interface Ingredients {
  ingredientId: number;
  quantity: number;
  unit: string;
  name: string;
}

const useIngredients = (id: number) =>
  useQuery({
    queryKey: ['/recipes', id, '/ingredients'],
    queryFn: () =>
      apiClient
        .get<Ingredients[]>('/recipes/' + id + '/ingredients')
        .then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useIngredients;
