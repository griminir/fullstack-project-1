import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './NavBar';
import RecipeGrid from './RecipeGrid';

const MainPageTemplate = () => {
  return (
    <Grid templateAreas={`"header" "main"`}>
      <GridItem area='header' bg='green' color='white'>
        <NavBar />
      </GridItem>
      <GridItem area='main'>
        <RecipeGrid />
      </GridItem>
    </Grid>
  );
};

export default MainPageTemplate;
