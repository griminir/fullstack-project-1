import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  picture: string; // ill work on this later
}

const useRecipes = () =>
  useQuery({
    queryKey: ['/recipes'],
    queryFn: () => apiClient.get<Recipe[]>('/recipes').then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useRecipes;
