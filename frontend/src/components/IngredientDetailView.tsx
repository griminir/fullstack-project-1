import { HStack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Ingredients } from '../hooks/UseIngeredients';
import { useState } from 'react';

interface Props {
  ingredient: Ingredients;
  updateIngredient: (id: number, data: Ingredients) => void;
}

const IngredientDetailView = ({ ingredient, updateIngredient }: Props) => {
  const [quantity, setQuantity] = useState(ingredient.quantity);
  const [unit, setUnit] = useState(ingredient.unit);
  const [name, setName] = useState(ingredient.name);

  return (
    <HStack width={'100%'} align='stretch' spacing={4}>
      <FormControl display='flex' alignItems='center'>
        <FormLabel flex='1'>Quantity:</FormLabel>
        <Input
          flex='2'
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
            updateIngredient(ingredient.ingredientId, {
              ...ingredient,
              quantity: Number(e.target.value),
            });
          }}
        />

        <FormLabel paddingLeft={4} flex='1'>
          Unit:
        </FormLabel>
        <Input
          flex='2'
          value={unit}
          onChange={(e) => {
            setUnit(e.target.value);
            updateIngredient(ingredient.ingredientId, {
              ...ingredient,
              unit: e.target.value,
            });
          }}
        />

        <FormLabel paddingLeft={4} flex='1'>
          Name:
        </FormLabel>
        <Input
          flex='2'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            updateIngredient(ingredient.ingredientId, {
              ...ingredient,
              name: e.target.value,
            });
          }}
        />
      </FormControl>
    </HStack>
  );
};

export default IngredientDetailView;
