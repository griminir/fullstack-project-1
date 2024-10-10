import { Box, Button, Heading, Spinner, VStack } from '@chakra-ui/react';
import useAddIngredient, { Ingredients } from '../hooks/UseIngeredients';
import IngredientDetailView from '../components/IngredientDetailView';
import useCreateIngredient from '../hooks/useCreateIngredient';

interface Props {
  idParam: number;
}

const IngredientsContainer = ({ idParam }: Props) => {
  const {
    data: ingredientsData,
    error: ingredientsError,
    isPending: ingredientsPending,
  } = useAddIngredient(idParam);

  // data mutation
  const { mutate: addIngredient } = useCreateIngredient();

  // handeling click events
  const handelAddIngredient = (data: Ingredients) => {
    console.log(data);

    addIngredient(data);
  };

  if (ingredientsPending) return <Spinner />;

  if (ingredientsError || !ingredientsData) throw ingredientsError;

  return (
    <Box width={'100%'}>
      <VStack spacing={10}>
        <Heading>Ingredients</Heading>
        {ingredientsData?.map((ingredient) => (
          <IngredientDetailView
            key={ingredient.ingredientId}
            ingredient={ingredient}
          />
        ))}
        <Button
          colorScheme='teal'
          onClick={() =>
            handelAddIngredient({
              ingredientId: 0,
              recipeId: idParam,
              quantity: 0,
              unit: '',
              name: '',
            })
          }
        >
          Add new ingredient
        </Button>
      </VStack>
    </Box>
  );
};

export default IngredientsContainer;
