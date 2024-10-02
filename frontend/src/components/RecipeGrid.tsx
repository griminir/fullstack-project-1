import { SimpleGrid, Text } from '@chakra-ui/react';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';

const RecipeGrid = () => {
  const { recipes, error } = useRecipes();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding='10px'
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecipeGrid;
