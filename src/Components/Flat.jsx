import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Badge, Box, Container, Image, Spinner, Text } from '@chakra-ui/react'
import {apiCallFlat} from '../Redux/action'
import {useSelector, useDispatch} from 'react-redux'
const Flat = () => {
  const dispatch = useDispatch();
  const {members, singleFlat, loading} = useSelector((store) => store);
  const {id} = useParams();
  const [res, setRes] = useState(members.length)
  useEffect(()=>{
    dispatch(apiCallFlat(id))
  },[])
  if(loading){
    return <Container w="50%" mt={"20%"} align="center">
      <Spinner size='xl' thickness='5px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'/>
    </Container>
  }
  return (
    <Container mt={3}>

      <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={singleFlat.imageUrl} alt='img' />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {res > 0 ? <span>{res}</span> : 1} BEDS • {res > 0 ? <span>{res}</span> : 1}  BATHS 
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          <Text fontSize="xl">
          singleFlat for : {singleFlat.type}
          </Text>
        </Box>

        <Box>
          {
            members.length > 0 ?
            <Text fontSize='lg'>memberss are : </Text>
            :
            <Text fontSize='lg'>Property is own by single person</Text>
          }
          {
            members.length> 0 ? members.map((item) => (
              <Box key={item._id}>
                  <Text>
                    {item.userId.firstName}
                    <span>    </span>
                    {item.userId.lastName}
                  </Text>
              </Box>
            )) : 
            null
          }
        </Box>
      </Box>
    </Box>
    </Container>
  )
}

export default Flat