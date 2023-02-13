import UniversityDetail from "@/components/UniversityDetail";
import { Button, Flex, Spinner } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import apiUseUniversities from "hooks/useUniversities";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { University } from "types/types";
import { ArrowLeftIcon } from "@chakra-ui/icons";

interface UniversityPageProps {
  initialUniversity: University;
  description: string;
}

const UniversityPage = ({
  initialUniversity,
  description,
}: // eslint-disable-next-line no-undef
UniversityPageProps): JSX.Element => {
  const { getUniversity } = apiUseUniversities();

  const router = useRouter();
  const { universityId } = router.query as { universityId: string };

  const { data: university, isLoading } = useQuery({
    queryKey: ["university", universityId],
    queryFn: () => getUniversity(universityId),
    initialData: initialUniversity,
  });

  const handleBack = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Spinner role={"progressbar"} />
      </Flex>
    );
  }

  if (!university) {
    router.push("/404");
    return <></>;
  }

  return (
    <Flex direction={"column"} gap={8}>
      <UniversityDetail university={university} description={description} />
      <Button
        size={"lg"}
        alignSelf={{
          base: "stretch",
          md: "center",
        }}
        leftIcon={<ArrowLeftIcon />}
        onClick={handleBack}
      >
        Back
      </Button>
    </Flex>
  );
};

export default UniversityPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { universityId } = params as { universityId: string };

  const { getUniversity } = apiUseUniversities();
  const university = await getUniversity(universityId);

  const description = faker.lorem.paragraphs(3);

  return {
    props: {
      initialUniversity: university,
      description,
    },
  };
};
