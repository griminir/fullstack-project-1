import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <HStack justifyContent={'space-between'}>
        <Image src={logo} alt='logo' />
        <Text>& garlic</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
