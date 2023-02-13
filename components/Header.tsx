import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => (
  <Flex
    as={"header"}
    height={"150"}
    justifyContent={"center"}
    alignItems={"center"}
    textColor={"textSecondary"}
    backgroundColor={"blackAlpha.800"}
    shadow={"2xl"}
  >
    <Heading
      as={"h1"}
      fontSize={{
        base: "5xl",
        sm: "7xl",
      }}
    >
      <Link href={"/"}>
        <Text>University HUB</Text>
      </Link>
    </Heading>
  </Flex>
);

export default Header;
