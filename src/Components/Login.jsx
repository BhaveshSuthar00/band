import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  useToast,
  Container,
  Button
} from '@chakra-ui/react'
const Login = () => {
  const [signin, setSignin] = useState({});
  const navigate = useNavigate()
  const toast = useToast()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://sunday-server.herokuapp.com/user/login", signin).then((res)=> {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      localStorage.setItem('signin', JSON.stringify(res.data.user));
      navigate('/')
    }).catch((err)=> console.log(err));
  }
  const handleChange = (e) => {
    const { id, value} = e.target;
    setSignin({...signin, [id] : value})
  }
  return (
    <>
      <Container mt={30}>
        <form action="" onSubmit={(e)=> handleSubmit(e)}>
        <FormControl isRequired >
          <FormLabel htmlFor='firstName'>First Name</FormLabel>
          <Input id='firstName' type='text' onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='lastName'>Last Name</FormLabel>
          <Input id='lastName' type='text'  onChange={handleChange}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' onChange={handleChange}/>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='password'>Pasword</FormLabel>
          <Input id='password' type='password' placeholder='Enter Password' onChange={handleChange}/>
        </FormControl>
        <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
          </form>
      </Container>
    </>
  )
}

export default Login