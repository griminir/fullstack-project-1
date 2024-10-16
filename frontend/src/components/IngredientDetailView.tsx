import { HStack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import Ingredients from '../interfaces/Ingredients';

interface Props {
  ingredient: Ingredients;
  updateIngredient: (id: number, data: Ingredients) => void;
}

const IngredientDetailView = ({ ingredient, updateIngredient }: Props) => {
  const [updatedIngredient, setUpdatedIngredient] = useState(ingredient);
  // console.log(updatedIngredient);

  return (
    <HStack width={'100%'} align='stretch' spacing={4}>
      <FormControl display='flex' alignItems='center'>
        <FormLabel flex='1'>Quantity:</FormLabel>
        <Input
          flex='2'
          value={updatedIngredient.quantity}
          onChange={(e) => {
            const newQuantity = Number(e.target.value);
            setUpdatedIngredient({
              ...updatedIngredient,
              quantity: newQuantity,
            });
            updateIngredient(updatedIngredient.ingredientId, {
              ...updatedIngredient,
              quantity: newQuantity,
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
            const newUnit = e.target.value;
            setUpdatedIngredient({
              ...updatedIngredient,
              unit: newUnit,
            });
            updateIngredient(updatedIngredient.ingredientId, {
              ...updatedIngredient,
              unit: newUnit,
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
            const newName = e.target.value;
            setUpdatedIngredient({
              ...updatedIngredient,
              name: newName,
            });
            updateIngredient(updatedIngredient.ingredientId, {
              ...updatedIngredient,
              name: newName,
            });
          }}
        />
      </FormControl>
    </HStack>
  );
};

export default IngredientDetailView;
