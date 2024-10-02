import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Recipe {
  id: number;
  title: string;
  description: string;
  // image: string; // ill deal with this later
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
