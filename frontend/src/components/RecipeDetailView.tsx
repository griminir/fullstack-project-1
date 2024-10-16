import { VStack, Image, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import Recipe from '../interfaces/Recipe';
import noImage from '../assets/no-image.webp';

interface Props {
  recipe: Recipe;
  updatingRecipe: (data: Recipe) => void;
}

const RecipeDetailView = ({ recipe, updatingRecipe }: Props) => {
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);

  //handle onchange event

  return (
    <VStack width={'100%'} justifyContent='center'>
      <Image
        width={'100%'}
        src={updatedRecipe.picture ? updatedRecipe.picture : noImage}
        alt={updatedRecipe.title}
      />
      <FormControl justifyContent={'center'}>
        <FormLabel textAlign='center' width='100%'>
          PictureURL:
        </FormLabel>
        <Input
          value={updatedRecipe.picture}
          onChange={(e) => {
            const newPicture = e.target.value;
            setUpdatedRecipe({ ...updatedRecipe, picture: newPicture });

            updatingRecipe({ ...updatedRecipe, picture: newPicture });
          }}
        />

        <FormLabel textAlign='center' width='100%'>
          Recipe Name:
        </FormLabel>
        <Input
          value={updatedRecipe.title}
          onChange={(e) => {
            const newTitle = e.target.value;
            setUpdatedRecipe({ ...updatedRecipe, title: newTitle });
            updatingRecipe({ ...updatedRecipe, title: newTitle });
          }}
        />

        <FormLabel textAlign='center' width='100%'>
          Description:
        </FormLabel>
        <Input
          value={updatedRecipe.description}
          onChange={(e) => {
            const newDescription = e.target.value;
            setUpdatedRecipe({ ...updatedRecipe, description: newDescription });
            updatingRecipe({ ...updatedRecipe, description: newDescription });
          }}
        />
      </FormControl>
    </VStack>
  );
};

export default RecipeDetailView;
