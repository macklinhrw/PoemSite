import {
  Heading,
  Flex,
  VStack,
  Box,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Navbar } from "../components/Nav/Navbar"
import React from "react";
import { useGetAllPoemsQuery } from "../generated/graphql";

const Index = () => {
  const { data, loading } = useGetAllPoemsQuery();

  return (
    <>
      <Navbar />
      <VStack mt="10">
        {!loading && data.getAllPoems.map((poem) => {
          return (
            <Box bg={mode("gray.200", "gray.700")} minW="20vw" minH="8vh" border={mode("", "1px")} borderColor="whiteAlpha.300"
              rounded="lg" shadow="md">
              <Text mt="1" textAlign="center" fontSize="xl" fontWeight="bold">{poem.title}</Text>
              <Text ml="4">{poem.content}</Text>
            </Box>
          )
        })}
      </VStack>
      {/*<Flex
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      <Heading fontSize="6vw">Comming soon...</Heading>
    </Flex>*/}
    </>
  )
};

export default Index;
