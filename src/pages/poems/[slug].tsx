import { useRouter } from "next/dist/client/router";
import { useGetPoemBySlugQuery } from "../../generated/graphql";
import { Navbar } from "../../components/Nav/Navbar";
import { VStack, Box, Text, Flex } from "@chakra-ui/react"

const PoemsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug)
  //@ts-ignore
  const { loading, data, error } = useGetPoemBySlugQuery({ skip: typeof slug !== "string", variables: { slug: slug } });

  if (error) {
    return (
      <>There was an error!</>
    )
  }


  return (
    <>
      <Navbar />
      <Box mx="auto" w="max" maxW="100%">
        {data?.getPoemBySlug && (
          <VStack mt="10">
            <Text as="h1" fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" fontFamily="serif">{data.getPoemBySlug.title}</Text>
            <Text wordBreak="break-word">
              {data.getPoemBySlug.content.split("\n").map((line) => {
                return (
                  <Text wordBreak="break-word" textAlign="center" fontSize={{ sm: "md", md: "lg", lg: "xl" }} fontFamily="serif">{line}</Text>
                )
              })}
            </Text>
          </VStack>
        )}
      </Box>
    </>
  )
}

//export async function getServerSideProps() {

//}

export default PoemsPage;
