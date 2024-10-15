import { Grid, GridItem } from '@chakra-ui/react';
import RecipeGrid from '../components/RecipeGrid';
import { queryClient } from '../main';

const HomePage = () => {
  queryClient.invalidateQueries({ queryKey: ['recipes'] });
  return (
    <Grid templateAreas={`"main"`}>
      <GridItem area='main'>
        <RecipeGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
