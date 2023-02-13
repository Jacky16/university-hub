import { Card, CardFooter } from "@chakra-ui/card";
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

interface UniversityCardProps {
  university: University;
}

const UniversityCard = ({
  university: { name, logoUrl, shortName, slug },
}: UniversityCardProps) => (
  <Box as="li" listStyleType={"none"}>
    <Card variant={"elevated"} maxWidth={"lg"} as={"article"} height={"100%"}>
      <Flex direction={"column"}>
        <CardHeader minH={"130px"}>
          <Box>
            <Heading size={"lg"}>{name}</Heading>
          </Box>
          <Box>
            <Text>{shortName}</Text>
          </Box>
        </CardHeader>
        <Box>
          <Image src={logoUrl} alt={`Logo of ${name}`}></Image>
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
