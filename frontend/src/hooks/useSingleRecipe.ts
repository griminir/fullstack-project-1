import { useQuery } from '@tanstack/react-query';
import { Recipe } from './useRecipes';
import apiClient from '../services/api-client';

const useSingleRecipe = (id: number) =>
  useQuery({
    queryKey: ['/recipes', id],
    queryFn: () =>
      apiClient.get<Recipe>('/recipes/' + id).then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useSingleRecipe;
