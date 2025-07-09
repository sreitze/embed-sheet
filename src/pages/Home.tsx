import { Box, Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('authUser') || '{}')

  const handleLogout = () => {
    localStorage.removeItem('authUser')
    navigate('/login')
  }

  const sheetId = '1ZX2nqI715mYKJDeEGXVEzmGXLQvLDLVO51BXhTN8Nzw'

  return (
    <Box p={8} maxW="700px" mx="auto">
      <Text fontSize="xl" mb={4}>
        Bienvenido, {user.email}
      </Text>
      <Button mb={6} onClick={handleLogout}>
        Cerrar sesión
      </Button>

      {/* Embed Google Sheet */}
      <Box
        as="iframe"
        src={`https://docs.google.com/spreadsheets/d/${sheetId}/edit?usp=sharing`}
        width="100%"
        height="400px"
        border="0"
        mb={8}
        title="Google Sheet de Tasas"
      />
    </Box>
  )
}