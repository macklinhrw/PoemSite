import { useRouter } from "next/dist/client/router";
import {
    GetAllPoemsDocument,
  GetPoemBySlugDocument,
  useGetPoemBySlugQuery,
} from "../../generated/graphql";
import { Navbar } from "../../components/Nav/Navbar";
import { VStack, Box, Text, Flex } from "@chakra-ui/react";
import { client } from "../_app";

const PoemsPage = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const { poem } = props

  return (
    <>
      <Navbar />
      <Box mx="auto" w="max" maxW="100%">
        {poem && (
          <VStack mt="10">
            <Text
              as="h1"
              fontSize={{ base: "xl", lg: "2xl" }}
              fontWeight="bold"
              fontFamily="serif"
            >
              {poem.title}
            </Text>
            <Text wordBreak="break-word">
              {poem.content.split("\n").map((line) => {
                return (
                  <Text
                    wordBreak="break-word"
                    textAlign="center"
                    fontSize={{ sm: "md", md: "lg", lg: "xl" }}
                    fontFamily="serif"
                  >
                    {line}
                  </Text>
                );
              })}
            </Text>
          </VStack>
        )}
      </Box>
    </>
  );
};

//export async function getServerSideProps() {

//}
export async function getStaticProps({ params }) {
  const result = await client.query({
    query: GetPoemBySlugDocument,
    variables: { slug: params.slug },
  });
  if (result.data.getPoemBySlug) {
    return {
      props: { poem: result.data.getPoemBySlug },
    };
  } else {
    return {
      props: {},
    };
  }
}

export async function getStaticPaths() {
  const result = await client.query({ query: GetAllPoemsDocument });
  const staticPaths = result.data.getAllPoems.map((path) => {
    return {
      params: {
        slug: path.slug,
      },
    };
  });
  return {
    paths: staticPaths,
    fallback: false,
  };
}

export default PoemsPage;
