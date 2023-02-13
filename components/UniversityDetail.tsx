import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { University } from "types/types";

interface UniversityDetailProps {
  university: University;
  description: string;
}

const UniversityDetail = ({
  university: { logoUrl, name, shortName },
  description,
}: UniversityDetailProps) => (
  <Flex
    paddingX={6}
    paddingY={"14"}
    direction={"column"}
    alignItems={"center"}
    gap={4}
    shadow={"2xl"}
    borderRadius={"xl"}
    backgroundColor={"secondary"}
    textColor={"textSecondary"}
  >
    <Flex alignItems={"center"} direction={"column"}>
      <Heading>{name}</Heading>
      <Text fontSize={"2xl"}>{shortName}</Text>
    </Flex>

    <Image
      src={logoUrl}
      alt={`Logo of ${name}`}
      width={200}
      height={200}
      style={{
        borderRadius: "4px",
      }}
    />

    <Divider />
    <Flex direction={"column"} gap={2} alignSelf={"start"}>
      <Heading alignSelf={"start"} as={"h3"}>
        Description
      </Heading>
      <Text>{description}</Text>
    </Flex>
  </Flex>
);

export default UniversityDetail;
