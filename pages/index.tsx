import HeadLayout from "@/components/HeadLayout";
import {
  Box,
  Button,
  Flex,
  Text,
  keyframes,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { ArrowDownIcon, ViewIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomePageData } from "types/types";

const arrowAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const animationDownArrow = `${arrowAnimation} 3s ease-in-out infinite`;

interface HomePageProps {
  data: HomePageData;
}

const HomePage = ({
  data: {
    title,
    description,
    card: { title: cardTitle, description: cardDescription, universitiesHref },
  },
}: HomePageProps) => (
  <>
    <HeadLayout
      headData={{
        title,
        description,
      }}
    />
    <Flex direction={"column"} alignItems={"center"} gap={"16"}>
      <Flex
        as={"section"}
        backgroundColor={"secondary"}
        textColor={"textSecondary"}
        padding={{
          base: "1rem",
          sm: "2rem",
        }}
        borderRadius={"12px"}
        borderTopRightRadius={"80px"}
        shadow={"2xl"}
      >
        <Flex>
          <Text
            fontSize={{
              base: "2xl",
              sm: "4xl",
              lg: "5xl",
              md: "5xl",
              xl: "7xl",
            }}
            fontWeight={"semibold"}
          >
            The best site to find your
            <Text as={"span"} fontWeight={"extrabold"} textShadow={"2xl"}>
              {" "}
              FAVORITE UNIVERSITY
            </Text>
          </Text>
        </Flex>

        <Flex position={"relative"}>
          <Image
            width={450}
            height={500}
            style={{
              objectFit: "contain",
              borderRadius: "12px",
              borderTopRightRadius: "80px",
            }}
            src="/images/student-logo.webp"
            alt="Student ready to jump"
          ></Image>
        </Flex>
      </Flex>

      <Divider />

      <Card
        direction={"column"}
        alignItems={"center"}
        shadow={"2xl"}
        padding={"6"}
        borderRadius={"xl"}
        textColor={"textPrimary"}
      >
        <CardHeader>
          <Text
            fontSize={{
              base: "2xl",
              sm: "5xl",
            }}
            fontWeight={"extrabold"}
          >
            {cardTitle}
          </Text>
        </CardHeader>
        <Divider />

        <CardBody
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"4"}
        >
          <Text>{cardDescription}</Text>
          <Box animation={animationDownArrow} as={motion.div}>
            <ArrowDownIcon boxSize={"24"} />
          </Box>

          <Link href={universitiesHref}>
            <Button
              variant="buttonBrandPrimary"
              as="span"
              rightIcon={<ViewIcon boxSize={"6"} />}
              size={"lg"}
            >
              <Text
                fontSize={{
                  base: "xl",
                  sm: "3xl",
                }}
              >
                Universities
              </Text>
            </Button>
          </Link>
        </CardBody>
      </Card>
    </Flex>
  </>
);

export default HomePage;

export const getStaticProps = () => {
  const data: HomePageData = {
    title: "University Hub",
    description: "The best site to find your FAVORITE UNIVERSITY",
    card: {
      title: "Find your university",
      description:
        "Sure that you find the university that you are looking for. Trust us 😄",
      universitiesHref: "/universities",
    },
  };

  return {
    props: {
      data,
    },
  };
};
