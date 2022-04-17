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
  HStack,
  Input,
  Select,
  useToast,
  Container,
  Spinner, } from '@chakra-ui/react'
import React, { useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {addFlat, getFlatLoading} from '../Redux/action'
const Main = () => {
  const toast = useToast()
  const {flat, loading} = useSelector((store)=> store);
  const dispatch = useDispatch()
  useEffect(()=>{
    axios.get('https://sunday-server.herokuapp.com/flat/all').then((res)=>{
      localStorage.setItem('flat', JSON.stringify(res.data.flat))
      dispatch(getFlatLoading())
      if(flat.length !== res.data.flat.length) dispatch(addFlat(res.data.flat))
    })
  }, [])
  const handleChange = (e) =>{
    const {id, value} = e.target
    if(value === 'asc' || value === 'desc'){
      axios.get(`https://sunday-server.herokuapp.com/flat/sort?${id}=${value}`).then((res)=>{
        localStorage.setItem('flat', JSON.stringify(res.data))
        dispatch(addFlat(res.data))
      })
    }
  }
  const handleBlock = (id)=>{
    let value = id.target.value;
    value = value.toUpperCase();
      if(value.length === 0){
        axios.get('https://sunday-server.herokuapp.com/flat/all').then((res)=>{
        localStorage.setItem('flat', JSON.stringify(res.data.flat))
        dispatch(addFlat(res.data.flat))
      })
    }
    axios.get(`https://sunday-server.herokuapp.com/flat/block/${value}`).then((res)=>{
      if(res.data.length<1){
        dispatch(getFlatLoading(!loading))
        setTimeout(() => {
          dispatch(getFlatLoading(!loading))
          dispatch(addFlat(JSON.parse(localStorage.getItem('flat'))))
        }, 1000);
        toast({
          title: 'Not available.',
          status: 'error',
          duration: 1000,
          isClosable: true,
        })
      } else {
          dispatch(addFlat(res.data))
        }
    }).catch((err)=>{dispatch(getFlatLoading(!loading))})
    
  }
  if(loading){
    return <Container w="50%" mt={50} align="center">
      <Spinner size='xl' thickness='5px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'/>
    </Container>
  }
  return (
    <VStack mt={15}>
      <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>List of Appartment</Heading>
      <HStack  w='38%' m={5}>
        <Box p='2' >
          <Select placeholder='Select option' id='sortby' onChange={handleChange}>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </Select>
        </Box>
        <Spacer />
        <Box>
          <Input p='1' placeholder='Search by Block' onChange={handleBlock} />
        </Box>
      </HStack>
      <TableContainer>
        <Table variant='simple' size="lg">
          <Thead>
            <Tr>
              <Th>Flat NO</Th>
              <Th>Image</Th>
              <Th>Type</Th>
              <Th>Block</Th>
              <Th>View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              flat.length>0 && flat.map((item, index) =>(
                <Tr key={index} size="md">
                  <Td>{item.flatNo}</Td>
                  <Td>
                      <Image src={item.imageUrl} boxSize='100px' objectFit='cover' alt='Image' />
                  </Td>
                  <Td>{item.type}</Td>
                  <Td isNumeric>{item.block}</Td>
                  <Td>
                    <Link to={`/flat/${item._id}`} >
                      View
                    </Link>
                  </Td>
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