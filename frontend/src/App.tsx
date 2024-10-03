import './App.css';
// import MainPageTemplate from './components/MainPageTemplate';
import NavBar from './components/NavBar';
import RecipeGrid from './components/RecipeGrid';
// import RecipePageTemplate from './components/RecipePageTemplate';
import { Button, Grid, GridItem, HStack } from '@chakra-ui/react';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
