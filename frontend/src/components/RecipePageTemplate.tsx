import { Box, Button, Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './NavBar';

const RecipePageTemplate = () => {
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
          
          
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default RecipePageTemplate;
