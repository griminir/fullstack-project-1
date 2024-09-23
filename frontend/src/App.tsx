import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Grid templateAreas={`"header header header" "main main main"`}>
        <GridItem area='header' bg='green' color='white'>
          <NavBar />
        </GridItem>
        <GridItem area='main' bg='black' color='white'>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
