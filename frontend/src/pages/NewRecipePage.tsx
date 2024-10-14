import {
  Grid,
  GridItem,
  VStack,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
} from '@chakra-ui/react';
import Recipe from '../interfaces/Recipe';
import { useState } from 'react';
import noImage from '../assets/no-image.webp';
import useCreateRecipe from '../hooks/useCreateRecipe';

const NewRecipePage = () => {
  const [recipe, setRecipe] = useState({title: '', description:'', picture: ''} as Recipe);
  const { mutate: createRecipe } = useCreateRecipe();

  return (
    <Grid templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack width={'100%'} justifyContent='center'>
          {/* this is where recipe starts */}
          <Image
            width={'100%'}
            src={recipe.picture ? recipe.picture : noImage}
            alt={recipe.title}
          />
          <FormControl justifyContent={'center'}>
            <FormLabel textAlign='center' width='100%'>
              PictureURL:
            </FormLabel>
            <Input
              value={recipe.picture}
              onChange={(e) =>
                setRecipe({ ...recipe, picture: e.target.value })
              }
            />

            <FormLabel textAlign='center' width='100%'>
              Recipe Name:
            </FormLabel>
            <Input
              value={recipe.title}
              onChange={(e) => {
                setRecipe({ ...recipe, title: e.target.value });
              }}
            />

            <FormLabel textAlign='center' width='100%'>
              Description:
            </FormLabel>
            <Input
              value={recipe.description}
              onChange={(e) =>
                setRecipe({ ...recipe, description: e.target.value })
              }
            />
            {/* this is where recipe ends */}
          </FormControl>
          <Button
            onClick={() => {
              createRecipe({...recipe});
            }}
          >
            create recipe test
          </Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default NewRecipePage;
