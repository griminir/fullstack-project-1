import { Grid, GridItem, VStack, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useSingleRecipe from '../hooks/useSingleRecipe';
import RecipeDetailView from '../components/RecipeDetailView';
import useIngredients from '../hooks/UseIngeredients';
import IngredientDetailView from '../components/IngredientDetailView';

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

  if (recipePending) return <Spinner />;
  if (ingredientsPending) return <Spinner />;

  if (recipeError || !recipeData) throw recipeError;
  if (ingredientsError || !ingredientsData) throw ingredientsError;

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
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default RecipeDetailsPage;
