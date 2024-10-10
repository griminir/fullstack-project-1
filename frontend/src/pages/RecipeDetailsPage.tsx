import { Grid, GridItem, VStack, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useSingleRecipe from '../hooks/useSingleRecipe';
import RecipeDetailView from '../components/RecipeDetailView';
import IngredientsContainer from '../components/IngredientsContainer';
import InstructionsContainer from '../components/InstructionsContainer';
import { queryClient } from '../main';

const RecipeDetailsPage = () => {
  queryClient.invalidateQueries({ queryKey: ['ingredients'] });
  queryClient.invalidateQueries({ queryKey: ['instructions'] });
  // fetch data from the API
  const { id } = useParams();
  const param = parseInt(id!);
  const {
    data: recipeData,
    error: recipeError,
    isPending: recipePending,
  } = useSingleRecipe(param);

  //pending state
  if (recipePending) return <Spinner />;

  //error handeling
  if (recipeError || !recipeData) throw recipeError;

  return (
    <Grid paddingX={10} paddingBottom={10} templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack spacing={10}>
          {recipeData?.map((recipe) => (
            <RecipeDetailView key={recipe.id} recipe={recipe} />
          ))}
          <IngredientsContainer idParam={param} />

          <InstructionsContainer idParam={param} />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default RecipeDetailsPage;
