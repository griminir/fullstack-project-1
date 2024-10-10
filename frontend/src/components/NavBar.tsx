import { Button, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <HStack bg={'green'} justifyContent='space-between' padding='10px'>
        <Link to='/'>
          <Image src={logo} alt='logo' />
        </Link>
        <Text paddingRight={5} whiteSpace='nowrap'>
          & garlic
        </Text>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
      <HStack bg={'green'} justifyContent={'center'}>
        <Link to='/new-recipe'>
          <Button colorScheme='teal'>Add new recipe</Button>
        </Link>
      </HStack>
    </>
  );
};

export default NavBar;
