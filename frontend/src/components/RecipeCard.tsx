import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Recipe } from '../hooks/useRecipes';

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={recipe.picture} />
      <CardBody>
        <Heading fontSize='2xl'>{recipe.title}</Heading>
        <Text>{recipe.description}</Text>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
