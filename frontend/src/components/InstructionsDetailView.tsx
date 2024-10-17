import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { useState } from 'react';
import Instruction from '../interfaces/Instruction';

interface Props {
  instructions: Instruction;
  updateInstruction: (id: number, data: Instruction) => void;
}

const InstructionsDetailView = ({ instructions, updateInstruction }: Props) => {
  const [updatedInstruction, setInstruction] = useState(instructions);

  return (
    <HStack width={'100%'} align='stretch' spacing={2}>
      <FormControl display='flex' alignItems='center'>
        <FormLabel paddingLeft={4} flex='1' marginBottom={0}>
          Step:
        </FormLabel>
        <Input
          flex='auto'
          value={updatedInstruction.step}
          onChange={(e) => {
            const newStep = e.target.value;
            setInstruction({ ...updatedInstruction, step: newStep });
            updateInstruction(updatedInstruction.id, {
              ...updatedInstruction,
              step: newStep,
            });
          }}
        />
      </FormControl>
    </HStack>
  );
};

export default InstructionsDetailView;
