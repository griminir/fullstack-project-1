import { Grid, GridItem, VStack } from '@chakra-ui/react';
import RecipeGrid from '../components/RecipeGrid';
import { queryClient } from '../main';
import SearchInput from '../components/SearchInput';

const HomePage = () => {
  queryClient.invalidateQueries({ queryKey: ['recipes'] });
  return (
    <Grid marginY={2} templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack spacing={4} align='stretch'>
          <SearchInput />
          <RecipeGrid />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
