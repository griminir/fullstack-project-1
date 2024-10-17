import { Button, HStack, Image, Heading } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <HStack bg={'green'} justifyContent='space-between' padding='10px'>
        <HStack></HStack>
        <HStack>
          <Link to='/'>
            <Image src={logo} alt='logo' />
          </Link>
          <Heading paddingRight={5} whiteSpace='nowrap'>
            & garlic
          </Heading>
        </HStack>
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
