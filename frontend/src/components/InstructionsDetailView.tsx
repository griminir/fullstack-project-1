import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { useState } from 'react';
import Instruction from '../interfaces/Instructions';

interface Props {
  instructions: Instruction;
  updateInstruction: (id: number, data: Instruction) => void;
}

const InstructionsDetailView = ({ instructions, updateInstruction }: Props) => {
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
          onChange={(e) => {
            setStep(e.target.value);
            updateInstruction(instructions.id, {
              ...instructions,
              step: e.target.value,
            });
          }}
        />
      </FormControl>
    </HStack>
  );
};

export default InstructionsDetailView;
