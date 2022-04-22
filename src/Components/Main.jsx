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
  Container,
  Spinner,
  Center,
  Flex,
  IconButton, } from '@chakra-ui/react'
import React, { useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {apiCallSortby, apiCallBlock,apiCall, pageChange} from '../Redux/action'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsViewList } from 'react-icons/bs';

const breakpoints2 = {
  sm: '20px',
  md: '20px',
  lg: '70px',
  xl: '80px',
  '2xl': '100px',
}
const Main = () => {
  const {flat, loading, page, resident} = useSelector((store)=> store);
  const dispatch = useDispatch()
  const handleChange = (e) =>{
    const {value} = e.target
    if(value === 'asc' || value === 'desc'){
      dispatch(apiCallSortby(value))
    }
  }
  const handleBlock = (id)=>{
    let value = id.target.value;
    value = value.toUpperCase();
      if(value.length === 0){
        dispatch(pageChange({page : 1, value : 'start'}))
    } else {
        dispatch(apiCallBlock(value))
    }
  }
  const handlePage = (pg)=> {
    let limit = JSON.parse(localStorage.getItem('limiter'));
    if(page <= limit){
      dispatch(pageChange({page : 1, status : pg}));
    }
  }
  const handleType = (id) => {
    const value = id.target.value;
    if(!value) return
    else if(value === 'both') {
      dispatch(apiCall(1))
    }
    else dispatch(apiCallSortby(value));
  }
  useEffect(()=>{
    dispatch(apiCall(page))
  }, [page])
  if(loading ){
    return <Container w="50%" mt={'20%'} align="center">
      <Spinner size='xl' thickness='5px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'/>
    </Container>
  }
  return (
    <VStack mt={15}>
      <Container >
        <Center>
        <Heading pt={4} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>List of Appartment</Heading>
        </Center>
      <HStack w="auto"  m={1} pt={3}>
        <Box p='2'>
          <Select placeholder='Select option' id='sortby' onChange={handleChange}>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </Select>
        </Box>
        <Spacer />
        <Box p='2'>
          <Select placeholder='Select option' value='' id='type' onChange={handleType}>
            <option value='both'>Both</option>
            <option value='owner'>Owner</option>
            <option value='tenant'>Tenant</option>
          </Select>
        </Box>
        <Spacer />
        <Box>
          <Input p='1' placeholder='Search by Block' onChange={handleBlock} />
        </Box>
      </HStack>
      </Container>
      <VStack>
        <TableContainer pt="5">
          <Table variant='striped'>
            <Thead>
              <Tr>
                <Th>Flat NO</Th>
                <Th>Image</Th>
                <Th>Type</Th>
                <Th>Block</Th>
                <Th>Resident</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                flat.length>0 && flat.map((item, index) =>(
                  <Tr key={index} size="md" >
                    <Td>{item.flatNo}</Td>
                    <Td >
                        <Image src={item.imageUrl} boxSize={breakpoints2} align="center" objectFit='cover' alt='Image' />
                    </Td>
                    <Td>{item.type}</Td>
                    <Td>{item.block}</Td>
                    {
                      resident[index] <= 1 ?
                        <Td>1</Td>
                        :
                        <Td>{resident[index]}</Td>
                    }
                    <Td>
                      <Link to={`/flat/${item._id}`} >
                        <IconButton variant="outline">
                          <BsViewList />
                        </IconButton>
                      </Link>
                    </Td>
                  </Tr>
                ))
              }
              
            </Tbody>
            
          </Table>
          <Flex  mt={2} mb={5} pt={5} >
            <Box p='2'  onClick={()=>handlePage('minus')}>
              <IconButton colorScheme='purple' variant="outline" isRound icon={< AiOutlineLeft />}/>
            </Box>
            <Spacer />
            <Box p='2' onClick={()=>handlePage('plus')}>
              <IconButton colorScheme='purple' variant="outline" isRound icon={< AiOutlineRight />}/>
            </Box>
          </Flex>
        </TableContainer>
      </VStack>
    </VStack>
  )
}

export default Main