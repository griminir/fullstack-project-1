import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        colorScheme='teal'
        color='white'
        borderRadius={20}
        placeholder='Search Recipes...'
        variant='filled'
        _placeholder={{ color: 'white' }}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
