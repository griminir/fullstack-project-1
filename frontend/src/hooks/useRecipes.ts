import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Recipe from '../interfaces/Recipe';

const apiClient = new APIClient<Recipe>('/recipes');

const useRecipes = () =>
  useQuery({
    queryKey: ['recipes'],
    queryFn: () => apiClient.getAll(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useRecipes;
