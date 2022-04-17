import { 
  Heading, 
  Thead,
  Table,
  VStack,
  Tbody,
  Tr,
  Image,
  Th,
  Td,
  Box,
  Spacer,
  TableContainer,
  Flex,
  Text,
  Button,
  HStack,
  Input,
  Select, } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Main = () => {
  const [data, setData] = useState(
    ()=> JSON.parse(localStorage.getItem('flat')) || []
  );
  useEffect(()=>{
    axios.get('https://sunday-server.herokuapp.com/flat/all').then((res)=>{
      localStorage.setItem('flat', JSON.stringify(res.data.flat))
    })
  }, [])
  const handleChange = (e) =>{
    const {id, value} = e.target
    console.log(id, value)
    axios.get(`https://sunday-server.herokuapp.com/flat/sort?${id}=${value}`).then((res)=>{
    console.log(res.data)  
    localStorage.setItem('flat', JSON.stringify(res.data))
      setData(res.data)
    })
  }
  if(data.length === 0){
    return <>Loading...</>
  }
  return (
    <VStack mt={15}>
      <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>List of Appartment</Heading>
      <HStack  w='32%' m={5}>
        <Box p='2' >
          <Select placeholder='Select option' id='sortby' onChange={handleChange}>
            <option value='asc'>Ascending</option>
            <option value='dsc'>Descending</option>
          </Select>
        </Box>
        <Spacer />
        <Box>
          <Input p='1' placeholder='Search by Block' />
        </Box>
        <Spacer />
        <Box p='2' ml='4'>fdfd</Box>
      </HStack>
      <TableContainer>
        <Table variant='simple' size="lg">
          <Thead>
            <Tr>
              <Th isNumeric>Flat NO</Th>
              <Th>Image</Th>
              <Th>Type</Th>
              <Th isNumeric>Block</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data && data.map((item, index) =>(
                <Tr key={index} size="md">
                  <Td>{item.flatNo}</Td>
                  <Td>
                      <Image src={item.imageUrl} boxSize='100px' objectFit='cover' alt='Image' />
                  </Td>
                  <Td>{item.type}</Td>
                  <Td isNumeric>{item.block}</Td>
                </Tr>
              ))
            }
            
          </Tbody>
          
        </Table>
      </TableContainer>
    </VStack>
  )
}

export default Main