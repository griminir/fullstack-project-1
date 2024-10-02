import { SimpleGrid, Text } from '@chakra-ui/react';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';
import RecipeCardSkeleton from './RecipeCardSkeleton';
import RecipeCardContainer from './RecipeCardContainer';

const RecipeGrid = () => {
  const { data, error, isLoading } = useRecipes();
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

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding='10px'
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <RecipeCardContainer>
              <RecipeCardSkeleton key={skeleton} />
            </RecipeCardContainer>
          ))}
        {data.map((recipe) => (
          <RecipeCardContainer>
            <RecipeCard key={recipe.id} recipe={recipe} />
          </RecipeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecipeGrid;
