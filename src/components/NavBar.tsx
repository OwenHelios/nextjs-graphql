import { Box, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg="tomato" p={4}>
      <Flex ml={'auto'} width="fit-content">
        <NextLink href="/login">
          <Link color="white" mr={4}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </Flex>
    </Box>
  )
}
