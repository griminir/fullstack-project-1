import { SimpleGrid, Text } from '@chakra-ui/react';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';
import RecipeCardSkeleton from './RecipeCardSkeleton';
import RecipeCardContainer from './RecipeCardContainer';

const RecipeGrid = () => {
  const { data: recipeData, error: recipeError, isPending } = useRecipes();
  const skeletons = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
  ];

  if (recipeError) return <Text>{recipeError.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding='10px'
    >
      {isPending &&
        skeletons.map((skeleton) => (
          <RecipeCardContainer key={skeleton}>
            <RecipeCardSkeleton />
          </RecipeCardContainer>
        ))}
      {recipeData?.map((recipe) => (
        <RecipeCardContainer key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </RecipeCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default RecipeGrid;
