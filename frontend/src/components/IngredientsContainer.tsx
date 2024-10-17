import {
  Box,
  Button,
  Heading,
  Spinner,
  VStack,
  HStack,
} from '@chakra-ui/react';
import IngredientDetailView from '../components/IngredientDetailView';
import useCreateIngredient from '../hooks/useCreateIngredient';
import useDeleteIngredient from '../hooks/useDeleteIngredient';
import Ingredients from '../interfaces/Ingredients';
import useIngredients from '../hooks/UseIngeredients';
import { useEffect, useState } from 'react';

interface Props {
  idParam: number;
  getIngredients: (data: Ingredients[]) => void;
}

const IngredientsContainer = ({ idParam, getIngredients }: Props) => {
  // fetch data from the API
  const {
    data: ingredientsData,
    error: ingredientsError,
    isPending: ingredientsPending,
  } = useIngredients(idParam);

  const [mutatedIngredients, setMutatedIngredients] = useState(
    [] as Ingredients[]
  );

  useEffect(() => {
    if (ingredientsData) {
      setMutatedIngredients(ingredientsData);
    }
  }, [ingredientsData]);

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
    console.log(mutatedIngredients);
    const updatedIngredient = mutatedIngredients?.map((ingredient) => {
      if (ingredient.ingredientId === id) {
        return data;
      }
      return ingredient;
    });
    setMutatedIngredients(updatedIngredient);
    getIngredients(updatedIngredient as Ingredients[]);
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
