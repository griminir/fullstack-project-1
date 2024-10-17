import {
  Grid,
  GridItem,
  VStack,
  Spinner,
  Button,
  HStack,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import useSingleRecipe from '../hooks/useSingleRecipe';
import RecipeDetailView from '../components/RecipeDetailView';
import IngredientsContainer from '../components/IngredientsContainer';
import InstructionsContainer from '../components/InstructionsContainer';
import { queryClient } from '../main';
import Recipe from '../interfaces/Recipe';
import useUpdateRecipe from '../hooks/useUpdateRecipe';
import { useState } from 'react';
import Ingredient from '../interfaces/Ingredient';
import useUpdateIngredients from '../hooks/useUpdateIngredients';
import Instruction from '../interfaces/Instruction';
import useUpdateInstructions from '../hooks/useUpdateInstructions';

const RecipeDetailsPage = () => {
  const navigate = useNavigate();
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

  //needed for updating the recipe
  const [updatedRecipe, setUpdatedRecipe] = useState({} as Recipe);
  const { mutate: updateRecipe } = useUpdateRecipe();

  function updatingRecipe(data: Recipe) {
    setUpdatedRecipe(data);
  }

  // needed for updating ingredients
  const [updatedIngredients, setUpdatedIngredients] = useState(
    [] as Ingredient[]
  );
  const { mutateAsync: updateIngredients } = useUpdateIngredients();

  function getIngredients(data: Ingredient[]) {
    setUpdatedIngredients(data);
  }

  // needed for updating instructions
  const [updatedInstructions, setUpdatedInstructions] = useState(
    [] as Instruction[]
  );
  const { mutateAsync: updateInstructions } = useUpdateInstructions();

  function getInstructions(data: Instruction[]) {
    setUpdatedInstructions(data);
  }

  //pending state
  if (recipePending) return <Spinner />;

  //error handeling
  if (recipeError || !recipeData) throw recipeError;

  //handling click events

  return (
    <Grid paddingX={10} paddingBottom={10} templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack spacing={10}>
          {recipeData?.map((recipe) => (
            <RecipeDetailView
              updatingRecipe={updatingRecipe}
              key={recipe.id}
              recipe={recipe}
            />
          ))}

          <IngredientsContainer
            getIngredients={getIngredients}
            idParam={param}
          />

          <InstructionsContainer
            getInstructions={getInstructions}
            idParam={param}
          />

          <HStack width={'100%'} justify={'flex-end'}>
            <Button
              bg={'green.900'}
              onClick={async () => {
                await updateRecipe(updatedRecipe);

                await updateIngredients(updatedIngredients);

                await updateInstructions(updatedInstructions);

                navigate('/');
              }}
            >
              Update recipe
            </Button>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default RecipeDetailsPage;
