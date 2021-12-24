import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import DarkToggle from "../DarkToggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Box>
      <Box
        as="header"
        bg={mode("purple.300", "purple.900")}
        borderBottomWidth="1px"
      >
        <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Link href="/">
                <Box as="button">
                  <VisuallyHidden>Envelope app</VisuallyHidden>
                  <Logo h="6" iconColor="blue.500" />
                </Box>
              </Link>
              <HStack display={{ base: "none", lg: "flex" }} spacing="8">
                <Link href="/">
                  <Box
                    fontWeight="semibold"
                    as="button"
                    color={mode("purple.500", "purple.500")}
                  >
                    Poems
                  </Box>
                </Link>
                <Link href="/about-me">
                  <Box
                    fontWeight="semibold"
                    as="button"
                    bg="inherit"
                    color={mode("gray.700", "gray.200")}
                  >
                    About me
                  </Box>
                </Link>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display="flex">
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
    </Box>
  );
};
