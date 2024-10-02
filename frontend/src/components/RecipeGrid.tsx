import { SimpleGrid, Text } from '@chakra-ui/react';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';
import RecipeCardSkeleton from './RecipeCardSkeleton';
import RecipeCardContainer from './RecipeCardContainer';

const RecipeGrid = () => {
  const { recipes, error, isLoading } = useRecipes();
  const skeletons = [1, 2, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding='10px'
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <RecipeCardContainer>
              <RecipeCardSkeleton key={skeleton} />
            </RecipeCardContainer>
          ))}
        {recipes.map((recipe) => (
          <RecipeCardContainer>
            <RecipeCard key={recipe.id} recipe={recipe} />
          </RecipeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecipeGrid;
