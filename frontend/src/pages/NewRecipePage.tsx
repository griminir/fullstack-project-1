import {
  Grid,
  GridItem,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Heading,
  HStack,
} from '@chakra-ui/react';
import Recipe from '../interfaces/Recipe';
import { useState } from 'react';
import noImage from '../assets/no-image.webp';
import useCreateRecipe from '../hooks/useCreateRecipe';
import { Ingredients } from '../hooks/UseIngeredients';
import IngredientDetailView from '../components/IngredientDetailView';
import { Instruction } from '../hooks/useInstructions';
import InstructionsDetailView from '../components/InstructionsDetailView';
import useCreateIngredient from '../hooks/useCreateIngredient';

const NewRecipePage = () => {
  // recipe details
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    picture: '',
  } as Recipe);
  const { mutateAsync: createRecipe } = useCreateRecipe();

  // ingredients details ----------------------------------------------------------------------------------
  const [ingredients, setIngredients] = useState([] as Ingredients[]);
  const { mutate: createIngredients } = useCreateIngredient();

  const handelAddIngredient = (data: Ingredients) => {
    setIngredients([...ingredients, data]);
  };

  const handleDeleteIngredient = (id: number) => {
    setIngredients(ingredients.filter((_, index) => index !== id));
  };

  // instructions details ----------------------------------------------------------------------------------
  const [instructions, setInstructions] = useState([] as Instruction[]);
  const handleAddInstruction = (data: Instruction) => {
    setInstructions([...instructions, data]);
  };

  const handleDeleteInstruction = (id: number) => {
    setInstructions(instructions.filter((_, index) => index !== id));
  };

  return (
    <Grid templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack width={'100%'} justifyContent='center' spacing={10}>
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

          <Heading>Ingredients</Heading>
          {ingredients?.map((ingredient, index) => (
            <HStack width={'100%'} key={index}>
              <IngredientDetailView ingredient={ingredient} />
              <Button
                bgColor={'red'}
                onClick={() => handleDeleteIngredient(index)}
              >
                Delete
              </Button>
            </HStack>
          ))}
          <Button
            colorScheme='teal'
            onClick={() =>
              handelAddIngredient({
                ingredientId: 0,
                recipeId: 0,
                quantity: 0,
                unit: '',
                name: '',
              })
            }
          >
            Add new ingredient
          </Button>

          <Heading>Instructions</Heading>
          {instructions?.map((instruction, index) => (
            <HStack width={'100%'} key={index}>
              <InstructionsDetailView instructions={instruction} />
              <Button
                onClick={() => handleDeleteInstruction(index)}
                bgColor={'red'}
              >
                Delete
              </Button>
            </HStack>
          ))}
          <Button
            onClick={() =>
              handleAddInstruction({
                recipeId: 0,
                id: 0,
                step: '',
              })
            }
            colorScheme='teal'
          >
            Add new instruction
          </Button>

          <Button
            colorScheme='teal'
            onClick={async () => {
              try {
                // Create the recipe and get the response
                const response = await createRecipe({ ...recipe });

                console.log('this is the data:' + response[0].id);

                // Map the ingredients to include the recipeId
                const updatedIngredients = await ingredients.map(
                  (ingredient) => ({
                    ...ingredient,
                    recipeId: response[0].id,
                  })
                );

                // Log the updated ingredients
                console.log(updatedIngredients);

                // Create the ingredients
                await createIngredients(updatedIngredients);
              } catch (error) {
                console.error('Error creating recipe or ingredients:', error);
              }
            }}
          >
            Create Recipe
          </Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default NewRecipePage;
