import { Button, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <>
      <HStack bg={'green'} justifyContent='space-between' padding='10px'>
        <Image src={logo} alt='logo' />
        <Text paddingRight={5} whiteSpace='nowrap'>
          & garlic
        </Text>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
      <HStack bg={'green'} justifyContent={'center'}>
        <Button colorScheme='teal'>Add new recipe</Button>
      </HStack>
    </>
  );
};

export default NavBar;
