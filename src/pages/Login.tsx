import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem('authUser', JSON.stringify({ email }))
      navigate('/')
    }
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center" minH="100vh">
      <VStack>
        <Heading size="lg" mb={4}>Login</Heading>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxW="300px"
          mb={4}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxW="300px"
          mb={4}
        />
        <Button colorScheme="blue" onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </VStack>
    </Box>
  )
}
