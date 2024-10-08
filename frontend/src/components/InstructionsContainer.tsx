import {
  Box,
  Button,
  Heading,
  Spinner,
  VStack,
  HStack,
} from '@chakra-ui/react';
import InstructionsDetailView from '../components/InstructionsDetailView';
import useInstructions, { Instruction } from '../hooks/useInstructions';
import useCreateInstruction from '../hooks/useCreateInstruction';
import useDeleteInstruction from '../hooks/useDeleteInstruction';

interface Props {
  idParam: number;
}

const InstructionsContainer = ({ idParam }: Props) => {
  // fetch data from the API
  const {
    data: InstructionsData,
    error: InstructionsError,
    isPending: InstructionsPending,
  } = useInstructions(idParam);

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

  if (InstructionsPending) return <Spinner />;

  if (InstructionsError || !InstructionsData) throw InstructionsError;

  return (
    <Box width={'100%'}>
      <VStack spacing={10}>
        <Heading>Instructions</Heading>
        {InstructionsData?.map((instruction) => (
          <HStack width={'100%'} key={instruction.id}>
            <InstructionsDetailView instructions={instruction} />
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
