import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import {
  Box,
  Button,
  CardHeader,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { University } from "types/types";

import NextLink from "next/link";

interface UniversityCardProps {
  university: University;
}

const UniversityCard = ({
  university: { name, logoUrl, shortName, slug },
}: UniversityCardProps) => (
  <Card variant={"elevated"} maxWidth={"lg"}>
    <Flex direction={"column"}>
      <CardHeader>
        <Box>
          <Heading>{name}</Heading>
        </Box>
        <Box>
          <Text>{shortName}</Text>
        </Box>
      </CardHeader>
      <Box>
        <Image src={logoUrl} alt={`Logo of ${name}`}></Image>
      </Box>

      <CardFooter justifyContent={"center"} display={"flex"}>
        <Link href={slug}>
          <Button as="span">
            <Text>More details</Text>
          </Button>
        </Link>
      </CardFooter>
    </Flex>
  </Card>
);

export default UniversityCard;
