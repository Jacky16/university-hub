import HeadLayout from "@/components/HeadLayout";
import UniversityCardList from "@/components/UniversityCardList";
import {
  Box,
  Flex,
  Heading,
  Spinner,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import useInfinityUniversities from "hooks/useInfinityUniversities";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Universities() {
  const { universities, fetchNextPage, isLoading, hasNextPage } =
    useInfinityUniversities(100);
  return (
    <>
      <HeadLayout
        headData={{
          title: "Universities",
          description: "List of all universities of Spain",
        }}
      />
      <VStack
        direction={"column"}
        spacing={10}
        divider={<StackDivider />}
        borderColor="gray.200"
        alignItems={"center"}
      >
        <Heading alignSelf={"start"}>Universities</Heading>

        <Box>
          <InfiniteScroll
            dataLength={universities.length}
            next={fetchNextPage}
            hasMore={hasNextPage || isLoading}
            loader={
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                paddingY={"10"}
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Flex>
            }
          >
            <UniversityCardList universities={universities} />
          </InfiniteScroll>
        </Box>
      </VStack>
    </>
  );
}
