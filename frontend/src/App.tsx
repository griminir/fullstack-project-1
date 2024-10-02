import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import RecipeGrid from './components/RecipeGrid';

function App() {
  return (
    <>
      <Grid templateAreas={`"header" "main"`}>
        <GridItem area='header' bg='green' color='white'>
          <NavBar />
        </GridItem>
        <GridItem area='main'>
          <RecipeGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
