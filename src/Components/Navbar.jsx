import { Box, Flex, Spacer , Button, Heading} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


import { FaSignInAlt, FaHome } from "react-icons/fa"
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import { SiGnuprivacyguard } from "react-icons/si"
const Navbar = () => {
  return (
    <>
      <Flex p={3} 
        mb={15}
        color='gray.400'
        position='sticky'
        top={0}
        zIndex={100}
        boxShadow='dark-lg'
        w={"100%"}
        rounded='md' 
        backdropFilter='auto' 
        backdropBlur='8px'
      >
      
        <Box p={2}>
          <Heading size="md">Apartment App</Heading>
        </Box>
        <Spacer />
        <Box>
            <ColorModeSwitcher />
            <Link to='/'>
                <Button rightIcon={<FaHome />} colorScheme="teal" mr="4" size='md' variant='ghost'
                >
                    Home
                </Button>
            </Link>
            <Link to='/signin'>
                <Button rightIcon={<SiGnuprivacyguard />} colorScheme="teal" size='md' mr="4" variant='ghost'>
                    Sign Up
                </Button>
            </Link>
            <Link to='/login'>
                <Button rightIcon={<FaSignInAlt />} colorScheme="teal" mr="4" size='md' variant='ghost'>Log in</Button>
            </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
