import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { Instruction } from '../hooks/useInstructions';
import { useState } from 'react';

interface Props {
  instructions: Instruction;
}

const InstructionsDetailView = ({ instructions }: Props) => {
  const [step, setStep] = useState(instructions.step);

  return (
    <HStack width={'100%'} align='stretch' spacing={2}>
      <FormControl display='flex' alignItems='center'>
        <FormLabel paddingLeft={4} flex='1' marginBottom={0}>
          Step:
        </FormLabel>
        <Input
          flex='auto'
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </FormControl>
    </HStack>
  );
};

export default InstructionsDetailView;
