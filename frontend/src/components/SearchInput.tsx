import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

import { Dispatch, SetStateAction } from 'react';

interface Props {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchInput = ({ setSearchTerm }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        colorScheme='teal'
        color='white'
        borderRadius={20}
        placeholder='Search Recipes...'
        variant='filled'
        onChange={(e) => setSearchTerm(e.target.value)}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
