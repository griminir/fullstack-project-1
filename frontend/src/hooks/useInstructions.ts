import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

export interface Instruction {
  id: number;
  step: string;
}

const apiClient = new APIClient<Instruction>('/recipes');

const useInstructions = (id: number) =>
  useQuery({
    queryKey: ['/recipes', id, 'instructions'],
    queryFn: () => apiClient.getAll(id, '/instructions'),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useInstructions;
