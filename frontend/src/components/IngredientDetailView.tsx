import { HStack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import Ingredients from '../interfaces/Ingredients';

interface Props {
  ingredient: Ingredients;
  updateIngredient: (id: number, data: Ingredients) => void;
}

const IngredientDetailView = ({ ingredient, updateIngredient }: Props) => {
  const [updatedIngredient, setUpdatedIngredient] = useState(ingredient);

  return (
    <HStack width={'100%'} align='stretch' spacing={4}>
      <FormControl display='flex' alignItems='center'>
        <FormLabel flex='1'>Quantity:</FormLabel>
        <Input
          flex='2'
          value={updatedIngredient.quantity}
          onChange={(e) => {
            setUpdatedIngredient({
              ...updatedIngredient,
              quantity: Number(e.target.value),
            });
            updateIngredient(updatedIngredient.ingredientId, {
              ...updatedIngredient,
              quantity: Number(e.target.value),
            });
          }}
        />

        <FormLabel paddingLeft={4} flex='1'>
          Unit:
        </FormLabel>
        <Input
          flex='2'
          value={updatedIngredient.unit}
          onChange={(e) => {
            setUpdatedIngredient({
              ...updatedIngredient,
              unit: e.target.value,
            });
            updateIngredient(updatedIngredient.ingredientId, {
              ...updatedIngredient,
              unit: e.target.value,
            });
          }}
        />

        <FormLabel paddingLeft={4} flex='1'>
          Name:
        </FormLabel>
        <Input
          flex='2'
          value={updatedIngredient.name}
          onChange={(e) => {
            setUpdatedIngredient({
              ...updatedIngredient,
              name: e.target.value,
            });
            updateIngredient(updatedIngredient.ingredientId, {
              ...updatedIngredient,
              name: e.target.value,
            });
          }}
        />
      </FormControl>
    </HStack>
  );
};

export default IngredientDetailView;
