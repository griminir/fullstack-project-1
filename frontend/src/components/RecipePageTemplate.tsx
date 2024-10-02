import { Button, Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './NavBar';
import useSingleRecipe from '../hooks/useSingleRecipe';

const RecipePageTemplate = () => {
  // const { data, error, isLoading } = useSingleRecipe(2); coded at because not needed right now
  return (
    <Grid templateAreas={`"header" "main"`}>
      <GridItem area='header' bg='green' color='white'>
        <NavBar />
        <HStack justifyContent={'center'}>
          <Button colorScheme='teal'>back to main page</Button>
        </HStack>
      </GridItem>
      <GridItem area='main'>
        <HStack>
          {/* <ul>
            {data.map((recipe) => (
              <li key={recipe.ingridientId}>
                {recipe.name} {recipe.quantity} {recipe.unit}
              </li>
            ))}
          </ul> */}
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default RecipePageTemplate;
