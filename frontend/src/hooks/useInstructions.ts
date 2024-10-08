import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

export interface Instruction {
  id: number;
  step: string;
}

const useInstructions = (id: number) =>
  useQuery({
    queryKey: ['/recipes', id, 'instructions'],
    queryFn: () =>
      apiClient
        .get<Instruction[]>('/recipes/' + id + '/instructions')
        .then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useInstructions;
