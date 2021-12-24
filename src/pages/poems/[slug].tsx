import { useRouter } from "next/dist/client/router";
import {
    GetAllPoemsDocument,
  GetPoemBySlugDocument,
  useGetPoemBySlugQuery,
} from "../../generated/graphql";
import { Navbar } from "../../components/Nav/Navbar";
import { VStack, Box, Text, Flex } from "@chakra-ui/react";
import { client } from "../_app";

const PoemsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  //@ts-ignore
  const { loading, data, error } = useGetPoemBySlugQuery({
    skip: typeof slug !== "string",
    variables: { slug: slug },
  });

  if (error) {
    return <>There was an error!</>;
  }

  return (
    <>
      <Navbar />
      <Box mx="auto" w="max" maxW="100%">
        {data?.getPoemBySlug && (
          <VStack mt="10">
            <Text
              as="h1"
              fontSize={{ base: "xl", lg: "2xl" }}
              fontWeight="bold"
              fontFamily="serif"
            >
              {data.getPoemBySlug.title}
            </Text>
            <Text wordBreak="break-word">
              {data.getPoemBySlug.content.split("\n").map((line) => {
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
