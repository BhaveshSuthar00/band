import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Flex,
    VStack
  } from '@chakra-ui/react'
  import { FaSignInAlt, FaHome } from "react-icons/fa"
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import { SiGnuprivacyguard } from "react-icons/si"

  import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
      <Flex
      
    //   dispay={{base : "none", xl : "none", sm : 'none', lg : "none", md : "none"}}
      >
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody >
                <VStack alignItems="left">
                <Link to='/' onClick={onClose}>
                <Button rightIcon={<FaHome />} colorScheme="teal" mr="4" size='md' variant='ghost'
                >
                    Home
                </Button>
            </Link>
            <Link to='/signin' onClick={onClose}>
                <Button rightIcon={<SiGnuprivacyguard />} colorScheme="teal" size='md' mr="4" variant='ghost'>
                    Sign Up
                </Button>
            </Link>
            <Link to='/login' onClick={onClose}>
                <Button rightIcon={<FaSignInAlt />} colorScheme="teal" mr="4" size='md' variant='ghost'>Log in</Button>
            </Link>
                </VStack>
            </DrawerBody>
            
          </DrawerContent>
        </Drawer>
      </Flex>
    )
  }
  export default DrawerExample
  