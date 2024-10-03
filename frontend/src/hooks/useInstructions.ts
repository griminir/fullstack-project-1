import useData from './useData';

export interface Instruction {
  id: number;
  step: string;
}

const useInstructions = (id: number) =>
  useData<Instruction>('/recipes/' + id + '/instructions');

export default useInstructions;
