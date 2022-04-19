import { Box, Flex, Spacer , Button, Heading, HStack} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { SiGnuprivacyguard } from "react-icons/si"
import DrawerExample from './DrawerM'
import { FaSignInAlt, FaHome } from "react-icons/fa"
import { ColorModeSwitcher } from '../ColorModeSwitcher';

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
        </Box>
        <HStack
          display={{base : 'flex',lg : "flex", md : "none", sm : 'none'}}
          >
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
        </HStack>

        <HStack 
          display={{base : 'none',lg : "none", md : "flex", sm : 'flex'}}
        >
          <DrawerExample/>
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
