import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header header header" "search search search" "main main main"`}
      >
        <GridItem area='header' bg='green' color='white'>
          onions & garlic
        </GridItem>
        <GridItem area='search' bg='blue' color='white'>
          search
        </GridItem>
        <GridItem area='main' bg='black' color='white'>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
