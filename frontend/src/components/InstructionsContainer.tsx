import {
  Box,
  Button,
  Heading,
  Spinner,
  VStack,
  HStack,
} from '@chakra-ui/react';
import InstructionsDetailView from '../components/InstructionsDetailView';
import useInstructions from '../hooks/useInstructions';

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

  if (InstructionsPending) return <Spinner />;

  if (InstructionsError || !InstructionsData) throw InstructionsError;

  return (
    <Box width={'100%'}>
      <VStack spacing={10}>
        <Heading>Instructions</Heading>
        {InstructionsData?.map((instruction) => (
          <HStack width={'100%'} key={instruction.id}>
            <InstructionsDetailView instructions={instruction} />
            <Button bgColor={'red'}>Delete</Button>
          </HStack>
        ))}
        <Button colorScheme='teal'>Add new instruction</Button>
      </VStack>
    </Box>
  );
};

export default InstructionsContainer;
