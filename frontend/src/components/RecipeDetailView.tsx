import { VStack, Image, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import Recipe from '../interfaces/Recipe';
import noImage from '../assets/no-image.webp';

interface Props {
  recipe: Recipe;
}

const RecipeDetailView = ({ recipe }: Props) => {
  const [picture, setPicture] = useState(recipe.picture);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  return (
    <VStack width={'100%'} justifyContent='center'>
      <Image width={'100%'} src={picture ? picture : noImage} alt={title} />
      <FormControl justifyContent={'center'}>
        <FormLabel textAlign='center' width='100%'>
          PictureURL:
        </FormLabel>
        <Input value={picture} onChange={(e) => setPicture(e.target.value)} />

        <FormLabel textAlign='center' width='100%'>
          Recipe Name:
        </FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />

        <FormLabel textAlign='center' width='100%'>
          Description:
        </FormLabel>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
    </VStack>
  );
};

export default RecipeDetailView;
