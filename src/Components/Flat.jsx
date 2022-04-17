import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Badge, Box, Container, Image, Spinner, Text } from '@chakra-ui/react'

import axios from 'axios';
const Flat = () => {
  const {id} = useParams();
  const [resident, setR] = useState([]);
  const [property, setPro] = useState({});
  const [res, setRes] = useState(0)
  useEffect(()=>{
    axios.get(`https://sunday-server.herokuapp.com/resident/${id}`).then((res)=>{
      setR(res.data)
      setRes(res.data.length)
    }).then(()=>{
      axios.get(`https://sunday-server.herokuapp.com/flat/${id}`).then((res)=>{
        setPro(res.data);
      })
    })
    
  },[id])
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
          Property for : {property.type}
          </Text>
        </Box>

        <Box>
          {
            resident.length > 0 ?
            <Text fontSize='lg'>Residents are : </Text>
            :
            <Text fontSize='lg'>Property is own by single person</Text>
          }
          {
            resident.length> 0 ? resident.map((item) => (
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