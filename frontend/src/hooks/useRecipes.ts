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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Recipe[]>('/recipes', { signal: controller.signal })
      .then((response) => {
        setRecipes(response.data);
        setLoading(false); // this is the way around strict mode
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false); // this is the way around strict mode
      });
    // .finally(() => setLoading(false)); this is how it should be but it's not working because of strict mode

    return () => controller.abort();
  }, []);

  return { recipes, error, isLoading };
};

export default useRecipes;
