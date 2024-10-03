import useData from './useData';
import { Recipe } from './useRecipes';

const useSingleRecipe = (id: number) => useData<Recipe>('/recipes/' + id);

export default useSingleRecipe;
