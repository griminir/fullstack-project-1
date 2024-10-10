import { Grid, GridItem } from '@chakra-ui/react';
import RecipeGrid from './RecipeGrid';

const HomePage = () => {
  return (
    <Grid templateAreas={`"main"`}>
      <GridItem area='main'>
        <RecipeGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
