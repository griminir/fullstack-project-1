import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Instruction from '../interfaces/Instruction';

const apiClient = new APIClient<Instruction>('/recipes');

const useInstructions = (id: number) =>
  useQuery({
    queryKey: ['instructions'],
    queryFn: () => apiClient.getAll(id, '/instructions'),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useInstructions;
