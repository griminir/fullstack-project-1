import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import Recipe from '../interfaces/Recipe';

const useSingleRecipe = (id: number) =>
  useQuery({
    queryKey: ['/recipes', id],
    queryFn: () =>
      apiClient.get<Recipe>('/recipes/' + id).then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useSingleRecipe;
