import { Box, Button, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery()
  let body = null

  if (fetching) {
    //data is loading
  } else if (!data?.me) {
    //not logged in
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={4}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    )
  } else {
    //logged in
    body = (
      <Flex>
        <Box mr={4}>{data.me.username}</Box>
        <Button variant="link">Logout</Button>
      </Flex>
    )
  }
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
