import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt='logo' />
      <Text>& garlic</Text>
    </HStack>
  );
};

export default NavBar;
