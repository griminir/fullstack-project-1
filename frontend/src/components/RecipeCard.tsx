import { Button, Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Recipe } from '../hooks/useRecipes';
import noImage from '../assets/no-image.webp';

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card>
      <Image src={recipe.picture === null ? noImage : recipe.picture} />
      <CardBody>
        <Button variant='link' fontSize='2xl'>
          {recipe.title}
        </Button>
        <Text>{recipe.description}</Text>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
