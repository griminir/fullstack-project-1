import { Grid, GridItem, HStack, Text } from '@chakra-ui/react';

const NewRecipePage = () => {
  return (
    <Grid templateAreas={`"main"`}>
      <GridItem area='main'>
        <HStack>
          <Text> New Recipe Page</Text>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default NewRecipePage;
