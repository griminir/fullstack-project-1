import { Grid, GridItem, VStack } from '@chakra-ui/react';
import RecipeGrid from '../components/RecipeGrid';
import { queryClient } from '../main';
import SearchInput from '../components/SearchInput';
import { useState } from 'react';

const HomePage = () => {
  queryClient.invalidateQueries({ queryKey: ['recipes'] });
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Grid marginY={2} templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack spacing={4} align='stretch'>
          <SearchInput setSearchTerm={setSearchTerm} />
          <RecipeGrid  searchTerm={searchTerm} />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
