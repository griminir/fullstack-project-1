import {
  Grid,
  GridItem,
  VStack,
  Spinner,
  Heading,
  Button,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useSingleRecipe from '../hooks/useSingleRecipe';
import RecipeDetailView from '../components/RecipeDetailView';
import useInstructions from '../hooks/useInstructions';
import InstructionsDetailView from '../components/InstructionsDetailView';
import IngredientsContainer from '../components/IngredientsContainer';

const RecipeDetailsPage = () => {
  // fetch data from the API
  const { id } = useParams();
  const param = parseInt(id!);
  const {
    data: recipeData,
    error: recipeError,
    isPending: recipePending,
  } = useSingleRecipe(param);

  const {
    data: InstructionsData,
    error: InstructionsError,
    isPending: InstructionsPending,
  } = useInstructions(param);

  //pending state
  if (recipePending) return <Spinner />;

  if (InstructionsPending) return <Spinner />;

  //error handeling
  if (recipeError || !recipeData) throw recipeError;

  if (InstructionsError || !InstructionsData) throw InstructionsError;

  return (
    <Grid paddingX={10} templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack spacing={10}>
          {recipeData?.map((recipe) => (
            <RecipeDetailView key={recipe.id} recipe={recipe} />
          ))}
          <IngredientsContainer idParam={param} />

          <Heading>Instructions</Heading>
          {InstructionsData?.map((instruction) => (
            <InstructionsDetailView
              key={instruction.id}
              instructions={instruction}
            />
          ))}
          <Button colorScheme='teal'>Add new instruction</Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default RecipeDetailsPage;
