import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar'
function App() {
  return (
    <ChakraProvider theme={theme}>
      
        <Navbar />
        <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
