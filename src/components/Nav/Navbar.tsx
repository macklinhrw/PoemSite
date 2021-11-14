import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import DarkToggle from "../DarkToggle"

export const Navbar = () => {
  return (
    <Box>
      <Box as="header" bg={mode('purple.300', 'purple.900')} borderBottomWidth="1px">
        <Box maxW="7xl" mx="auto" py="4" px={{ base: '6', md: '8' }}>
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home">
                <VisuallyHidden>Envelope app</VisuallyHidden>
                <Logo h="6" iconColor="blue.500" />
              </Box>
              <HStack display={{ base: 'none', lg: 'flex' }} spacing="8">
                <NavLink.Desktop href="/" color={mode("purple.500", "purple.500")}>
                  Poems
                </NavLink.Desktop>
                <NavLink.Desktop href="/about-me" color={mode("gray.700", "gray.200")}>
                  About me
                </NavLink.Desktop>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display='flex'>
                {/*<NavLink.Desktop>Log in </NavLink.Desktop>*/}
                <DarkToggle />
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box >
  )
}
