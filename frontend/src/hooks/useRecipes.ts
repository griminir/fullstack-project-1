import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  picture: string; // ill work on this later
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Recipe[]>('/recipes', { signal: controller.signal })
      .then((response) => setRecipes(response.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { recipes, error };
};

export default useRecipes;
