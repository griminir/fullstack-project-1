import { Button, Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './NavBar';
import RecipeGrid from './RecipeGrid';

const MainPageTemplate = () => {
  return (
    <Grid templateAreas={`"header" "main"`}>
      <GridItem area='header' bg='green' color='white'>
        <NavBar />
        <HStack justifyContent={'center'}>
          <Button colorScheme='teal'>Add new recipe</Button>
        </HStack>
      </GridItem>
      <GridItem area='main'>
        <RecipeGrid />
      </GridItem>
    </Grid>
  );
};

export default MainPageTemplate;
