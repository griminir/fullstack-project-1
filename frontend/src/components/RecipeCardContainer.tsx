import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const RecipeCardContainer = ({ children }: Props) => {
  return (
    <Box
      width='100%'
      borderRadius={10}
      overflow='hidden'
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.15s ease-in',
      }}
    >
      {children}
    </Box>
  );
};

export default RecipeCardContainer;
