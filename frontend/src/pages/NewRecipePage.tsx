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
import IngredientDetailView from '../components/IngredientDetailView';
import InstructionsDetailView from '../components/InstructionsDetailView';
import useCreateIngredient from '../hooks/useCreateIngredient';
import useCreateInstruction from '../hooks/useCreateInstruction';
import { useNavigate } from 'react-router-dom';
import Ingredients from '../interfaces/Ingredients';
import Instruction from '../interfaces/Instruction';

const NewRecipePage = () => {
  const navigate = useNavigate();
  // recipe details ---------------------------------------------------------------------------------------
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
    setIngredients(ingredients.filter((s) => s.ingredientId !== id));
  };

  function updateIngredient(id: number, data: Ingredients) {
    const updatedIngredients = ingredients?.map((ingredient) => {
      if (ingredient.ingredientId === id) {
        return data;
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  }

  // instructions details ----------------------------------------------------------------------------------
  const [instructions, setInstructions] = useState([] as Instruction[]);
  const { mutate: createInstructions } = useCreateInstruction();

  const handleAddInstruction = (data: Instruction) => {
    setInstructions([...instructions, data]);
  };

  const handleDeleteInstruction = (id: number) => {
    setInstructions(instructions.filter((s) => s.id !== id));
  };

  function updateInstruction(id: number, data: Instruction) {
    const updatedInstructions = instructions.map((instruction) => {
      if (instruction.id === id) {
        return data;
      }
      return instruction;
    });
    setInstructions(updatedInstructions);
  }

  return (
    <Grid templateAreas={`"main"`}>
      <GridItem area='main'>
        <VStack
          width={'100%'}
          paddingBottom={10}
          justifyContent='center'
          spacing={10}
        >
          {/* this is where recipe starts */}
          <Image
            width={'100%'}
            height={'700px'}
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
          {ingredients?.map((ingredient) => (
            <HStack width={'100%'} key={ingredient.ingredientId}>
              <IngredientDetailView
                ingredient={ingredient}
                updateIngredient={updateIngredient}
              />
              <Button
                bgColor={'red'}
                onClick={() => handleDeleteIngredient(ingredient.ingredientId)}
              >
                Delete
              </Button>
            </HStack>
          ))}
          <Button
            colorScheme='teal'
            onClick={() =>
              handelAddIngredient({
                ingredientId: Math.random(),
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
          {instructions?.map((instruction) => (
            <HStack width={'100%'} key={instruction.id}>
              <InstructionsDetailView
                updateInstruction={updateInstruction}
                instructions={instruction}
              />
              <Button
                onClick={() => handleDeleteInstruction(instruction.id)}
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
                id: Math.random(),
                step: '',
              })
            }
            colorScheme='teal'
          >
            Add new instruction
          </Button>

          <HStack width={'100%'} justify={'flex-end'}>
            <Button
              disabled={instructions.length < 1 || ingredients.length < 1}
              bg={'green.900'}
              onClick={async () => {
                try {
                  // Create the recipe and get the response needs to be mutatedAsync to get the id i think
                  const response = await createRecipe({ ...recipe });

                  console.log('this is the data:' + response[0].id);

                  // Map the ingredients to include the recipeId
                  const updatedIngredients = await ingredients.map(
                    (ingredient) => ({
                      ...ingredient,
                      recipeId: response[0].id,
                    })
                  );
                  const updatedInstructions = await instructions.map(
                    (instruction) => ({
                      ...instruction,
                      recipeId: response[0].id,
                    })
                  );

                  // Create the ingredients
                  await createIngredients(updatedIngredients);

                  // Create the instructions
                  await createInstructions(updatedInstructions);

                  // Navigate to the recipe page
                  navigate('/');
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Create Recipe
            </Button>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default NewRecipePage;
