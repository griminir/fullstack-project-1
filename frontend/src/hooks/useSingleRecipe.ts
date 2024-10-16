import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Recipe from '../interfaces/Recipe';

const apiClient = new APIClient<Recipe>('/recipes');

const useSingleRecipe = (id: number) =>
  useQuery({
    queryKey: ['recipes', { id }],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useSingleRecipe;
