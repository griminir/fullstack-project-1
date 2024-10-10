import { Grid, GridItem, VStack, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useSingleRecipe from '../hooks/useSingleRecipe';
import RecipeDetailView from '../components/RecipeDetailView';
import useIngredients from '../hooks/UseIngeredients';
import IngredientDetailView from '../components/IngredientDetailView';
import useInstructions from '../hooks/useInstructions';
import InstructionsDetailView from '../components/InstructionsDetailView';

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const param = parseInt(id!);
  const {
    data: recipeData,
    error: recipeError,
    isPending: recipePending,
  } = useSingleRecipe(param);
  const {
    data: ingredientsData,
    error: ingredientsError,
    isPending: ingredientsPending,
  } = useIngredients(param);
  const {
    data: InstructionsData,
    error: InstructionsError,
    isPending: InstructionsPending,
  } = useInstructions(param);

  if (recipePending) return <Spinner />;
  if (ingredientsPending) return <Spinner />;
  if (InstructionsPending) return <Spinner />;

  if (recipeError || !recipeData) throw recipeError;
  if (ingredientsError || !ingredientsData) throw ingredientsError;
  if (InstructionsError || !InstructionsData) throw InstructionsError;

  return (
    <Grid paddingX={10} templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack spacing={10}>
          {recipeData?.map((recipe) => (
            <RecipeDetailView key={recipe.id} recipe={recipe} />
          ))}
          {ingredientsData?.map((ingredient) => (
            <IngredientDetailView
              key={ingredient.ingredientId}
              ingredient={ingredient}
            />
          ))}
          {InstructionsData?.map((instruction) => (
            <InstructionsDetailView
              key={instruction.id}
              instructions={instruction}
            />
          ))}
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default RecipeDetailsPage;
