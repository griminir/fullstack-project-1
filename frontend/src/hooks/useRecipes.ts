import useData from './useData';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  picture: string; // ill work on this later
}

const useRecipes = () => useData<Recipe>('/recipes');

export default useRecipes;
