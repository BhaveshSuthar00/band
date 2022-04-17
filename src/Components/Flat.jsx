import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Badge, Box, Container, Divider, Image, Spinner, Text } from '@chakra-ui/react'

import { GiRoundStar } from 'react-icons/gi';
import axios from 'axios';
const Flat = () => {
  const {id} = useParams();
  const [resident, setR] = useState([]);
  const [property, setPro] = useState({
    
  });
  useEffect(()=>{
    axios.get(`https://sunday-server.herokuapp.com/resident/${id}`).then((res)=>{
      setR(res.data)
      
    }).then(()=>{
      axios.get(`https://sunday-server.herokuapp.com/flat/${id}`).then((res)=>{
        setPro(res.data);
      })
    })
    
  },[])
  if(property.imageUrl == undefined){
    return <Container w="50%" mt={50} align="center">
      <Spinner size='xl' thickness='5px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'/>
    </Container>
  }
  return (
    <Container mt={3}>

      <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt='img' />

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
            3 BEDS • 2 BATHS 
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
          Property for : {property.type}
          </Text>
        </Box>

        <Box>
          <Text fontSize='lg'>Residents are : </Text>
          {
            resident.map((item, index) => (
              <Box key={item._id}>
                  <Text>
                    {item.userId.firstName}
                    <span>    </span>
                    {item.userId.lastName}
                  </Text>
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
    </Container>
  )
}

export default Flat