import {
  Box,
  Button,
  Heading,
  Spinner,
  VStack,
  HStack,
} from '@chakra-ui/react';
import InstructionsDetailView from '../components/InstructionsDetailView';
import useCreateInstruction from '../hooks/useCreateInstruction';
import useDeleteInstruction from '../hooks/useDeleteInstruction';
import { useEffect, useState } from 'react';
import Instruction from '../interfaces/Instruction';
import useInstructions from '../hooks/useInstructions';

interface Props {
  idParam: number;
  getInstructions: (data: Instruction[]) => void;
}

const InstructionsContainer = ({ idParam, getInstructions }: Props) => {
  // fetch data from the API and make in mutable
  const {
    data: instructionsData,
    error: InstructionsError,
    isPending: InstructionsPending,
  } = useInstructions(idParam);
  const [mutatedInstructions, setMutatedInstructions] = useState(
    [] as Instruction[]
  );

  useEffect(() => {
    if (instructionsData) {
      setMutatedInstructions(instructionsData);
    }
  }, [instructionsData]);

  // data mutation
  const { mutate: addInstruction } = useCreateInstruction();
  const { mutate: deleteInstruction } = useDeleteInstruction();

  // handeling click events
  const handleAddInstruction = (data: Instruction) => {
    console.log(data);

    addInstruction(data);
  };

  const handleDeleteInstruction = (id: number) => {
    deleteInstruction(id);
  };

  function updateInstruction(id: number, data: Instruction) {
    const updatedInstructions = mutatedInstructions?.map((instruction) => {
      if (instruction.id === id) {
        return data;
      }
      return instruction;
    });
    setMutatedInstructions(updatedInstructions);
    getInstructions(updatedInstructions);
  }

  if (InstructionsPending) return <Spinner />;

  if (InstructionsError || !instructionsData) throw InstructionsError;

  return (
    <Box width={'100%'}>
      <VStack spacing={10}>
        <Heading>Instructions</Heading>
        {instructionsData?.map((instruction) => (
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
              recipeId: idParam,
              id: 0,
              step: '',
            })
          }
          colorScheme='teal'
        >
          Add new instruction
        </Button>
      </VStack>
    </Box>
  );
};

export default InstructionsContainer;
