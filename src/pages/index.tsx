import {
  Heading,
  Flex,
  VStack,
  LinkBox,
  Text,
  SimpleGrid,
  Img,
  Box,
  LinkOverlay,
  Spacer,
  Link as CLink,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Navbar } from "../components/Nav/Navbar"
import React from "react";
import { useGetAllPoemsQuery } from "../generated/graphql";
import Link from "next/link"

const Index = () => {
  const { data, loading } = useGetAllPoemsQuery();

  return (
    <>
      <Navbar />
      <Box mt={5}>
        <Flex flexWrap="wrap" align="center" justify="center" mx={{ sm: "40", base: "10", lg: "15vw" }}>
          {!loading && data.getAllPoems.map((poem) => {
            return (
              <Flex flexDir="column" mb="5" mr={{ sm: "0", base: "0", md: "5", lg: "5" }}>
                <LinkBox bg={mode("gray.200", "gray.700")} border={mode("", "1px")} borderColor="whiteAlpha.300"
                  rounded="lg" shadow="md" transition="all 0.2s" as="article" _hover={{ shadow: { sm: 'lg' } }}
                  overflow="hidden" h="440" w="80">
                  <Img src={poem.imageLink}
                    alt={poem.title} objectFit="cover" h="60" w="80" />
                  {poem.title && (
                    <Text my="1" textAlign="center" fontSize="xl" fontWeight="bold" fontFamily="">
                      {poem.title}
                    </Text>
                  )}
                  <Text textAlign="center" noOfLines={4} mx="4">
                    {poem.content.split("\n").map((line) => {
                      return (
                        <Text textAlign="center" fontSize="lg" fontFamily="serif">{line}</Text>
                      )
                    })}
                  </Text>
                  <Link href={`/poems/${poem.slug}`}>
                    <LinkOverlay href={`/poems/${poem.slug}`}></LinkOverlay>
                  </Link>
                  <Flex mx="auto">
                    <Link href={`/poems/${poem.slug}`}>
                      <CLink mt="4" mx="auto" href={`/poems/${poem.slug}`}>
                        Read more...
                      </CLink>
                    </Link>
                  </Flex>
                </LinkBox>
              </Flex>
            )
          })}
        </Flex>
      </Box>
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
