import { Card, CardFooter } from "@chakra-ui/card";
import {
  Box,
  Button,
  CardHeader,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

import Image from "next/image";
import { University } from "types/types";

interface UniversityCardProps {
  university: University;
}

const UniversityCard = ({
  university: { name, logoUrl, shortName, slug },
}: UniversityCardProps) => (
  <Box as="li" listStyleType={"none"}>
    <Card variant={"elevated"} maxWidth={"lg"} as={"article"} height={"100%"}>
      <Flex direction={"column"}>
        <CardHeader minH={"150px"}>
          <Box>
            <Heading size={"lg"}>{name}</Heading>
          </Box>
          <Box>
            <Text>{shortName}</Text>
          </Box>
        </CardHeader>
        <Box position={"relative"} minHeight={"100px"}>
          <Image
            fill
            sizes={"100%"}
            style={{
              objectFit: "contain",
            }}
            src={logoUrl}
            alt={`Logo of ${name}`}
            priority
          ></Image>
        </Box>

        <CardFooter justifyContent={"center"} display={"flex"}>
          <Link href={`universities/${slug}`}>
            <Button as="span">
              <Text>More details</Text>
            </Button>
          </Link>
        </CardFooter>
      </Flex>
    </Card>
  </Box>
);

export default UniversityCard;
