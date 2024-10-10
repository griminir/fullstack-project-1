import { Heading, Card, CardBody, Image, Text } from '@chakra-ui/react';
import noImage from '../assets/no-image.webp';
import Recipe from '../interfaces/Recipe';
import { Link } from 'react-router-dom';

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card>
      <Image src={recipe.picture === null ? noImage : recipe.picture} />
      <CardBody>
        <Heading fontSize='2xl'>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </Heading>
        <Text>{recipe.description}</Text>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
