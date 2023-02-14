import { Card, CardBody, CardFooter } from "@chakra-ui/card";
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
    <Card
      variant={"elevated"}
      maxWidth={"lg"}
      as={"article"}
      height={"100%"}
      overflow={"hidden"}
    >
      <Flex
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CardHeader
          backgroundColor={"primary"}
          alignSelf={"stretch"}
          textColor={"textPrimary"}
          shadow={"md"}
          minHeight={"150px"}
        >
          <Box>
            <Heading as={"h3"} size={"lg"}>
              {name}
            </Heading>
          </Box>
          <Box>
            <Text>{shortName}</Text>
          </Box>
        </CardHeader>

        <CardBody>
          <Box position={"relative"} height={"150px"} width={"150px"}>
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
        </CardBody>

        <CardFooter>
          <Link href={`universities/${slug}`}>
            <Button as="span" variant="buttonBrandPrimary">
              <Text>More details</Text>
            </Button>
          </Link>
        </CardFooter>
      </Flex>
    </Card>
  </Box>
);

export default UniversityCard;
