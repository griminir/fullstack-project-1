import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Recipe {
  id: number;
  title: string;
  description: string;
  // image: string; // ill deal with this later
}

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<Recipe[]>('/recipes')
      .then((response) => setRecipes(response.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeGrid;
