import HeadLayout from "@/components/HeadLayout";
import { Button, Card, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const NotFoundPage = () => (
  <>
    <HeadLayout
      headData={{
        title: "404 Not Found Page",
        description: "404 Not Found pa",
      }}
    />

    <Flex direction={"column"} align={"center"} justify={"center"}>
      <Card
        padding={16}
        backgroundColor={"primary"}
        textColor={"textPrimary"}
        shadow={"xl"}
      >
        <Heading as={"h2"} fontSize={"5xl"}>
          404 Not Found 😞
        </Heading>
      </Card>

      <Link href={"/"} passHref>
        <Button
          as={"span"}
          size={"lg"}
          marginTop={8}
          variant={"buttonBrandPrimary"}
        >
          Go to Home
        </Button>
      </Link>
    </Flex>
  </>
);

export default NotFoundPage;

export const getStaticProps = () => ({
  props: {},
});
