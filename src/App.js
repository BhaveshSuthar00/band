import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
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
