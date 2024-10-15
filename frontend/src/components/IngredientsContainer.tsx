import {
  Box,
  Button,
  Heading,
  Spinner,
  VStack,
  HStack,
} from '@chakra-ui/react';
import useAddIngredient, { Ingredients } from '../hooks/UseIngeredients';
import IngredientDetailView from '../components/IngredientDetailView';
import useCreateIngredient from '../hooks/useCreateIngredient';
import useDeleteIngredient from '../hooks/useDeleteIngredient';
import { useState } from 'react';

interface Props {
  idParam: number;
}

const IngredientsContainer = ({ idParam }: Props) => {
  // fetch data from the API
  const {
    data: ingredientsData,
    error: ingredientsError,
    isPending: ingredientsPending,
  } = useAddIngredient(idParam);
  const [ingredients, setIngredients] = useState(ingredientsData);

  // data mutation
  const { mutate: addIngredient } = useCreateIngredient();
  const { mutate: deleteIngredient } = useDeleteIngredient();

  // handeling click events
  const handelAddIngredient = (data: Ingredients) => {
    console.log(data);

    addIngredient(data);
  };

  const handleDeleteIngredient = (id: number) => {
    deleteIngredient(id);
  };

  function updateIngredient(id: number, data: Ingredients) {
    const updatedIngredients = ingredients?.map((ingredient) => {
      if (ingredient.ingredientId === id) {
        return data;
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  }

  //state handeling
  if (ingredientsPending) return <Spinner />;
  if (ingredientsError || !ingredientsData) throw ingredientsError;

  return (
    <Box width={'100%'}>
      <VStack spacing={10}>
        <Heading>Ingredients</Heading>
        {ingredientsData?.map((ingredient) => (
          <HStack width={'100%'} key={ingredient.ingredientId}>
            <IngredientDetailView
              updateIngredient={updateIngredient}
              ingredient={ingredient}
            />
            <Button
              bgColor={'red'}
              onClick={() => handleDeleteIngredient(ingredient.ingredientId)}
            >
              Delete
            </Button>
          </HStack>
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
