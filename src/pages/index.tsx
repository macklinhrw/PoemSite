import {
  Heading,
  Flex,
  VStack,
  LinkBox,
  Text,
  SimpleGrid,
  Link,
  LinkOverlay,
  Img,
  Box,
  Spacer,
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
      <Box>
        <Flex flexWrap="wrap" align="center" justify="center" mx={{ base: "5", lg: "15vw" }}>
          {!loading && data.getAllPoems.map((poem) => {
            return (
              <Flex flexDir="column" mt="5" mr="5">
                <LinkBox bg={mode("gray.200", "gray.700")} border={mode("", "1px")} borderColor="whiteAlpha.300"
                  rounded="lg" shadow="md" mb="10" transition="all 0.2s" as="article" _hover={{ shadow: { sm: 'lg' } }}
                  overflow="hidden" h="440" w="80">
                  <Img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p235x350/241688929_6255935065504_8169602291895650284_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=67cdda&_nc_ohc=N9hKebKuKNgAX8VmsH8&_nc_ht=scontent-sjc3-1.xx&oh=070c7960c76e9969a35329a5a106ade4&oe=6194BA1C"
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
                  <LinkOverlay href={`/poems/${poem.slug}`}></LinkOverlay>
                  <Text textAlign="center" mt="4">
                    <Link href={`/poems/${poem.slug}`}>Read more...</Link>
                  </Text>
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
