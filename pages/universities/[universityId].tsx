import UniversityDetail from "@/components/UniversityDetail";
import { Button, Flex, Spinner } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import apiUseUniversities from "hooks/useUniversities";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { University } from "types/types";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import HeadLayout from "@/components/HeadLayout";

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

  return (
    <>
      <HeadLayout
        headData={{
          title: university!.name,
          description,
        }}
      />
      <Flex direction={"column"} gap={8}>
        <UniversityDetail university={university!} description={description} />
        <Button
          size={"lg"}
          alignSelf={{
            base: "stretch",
            md: "center",
          }}
          variant={"buttonBrandPrimary"}
          leftIcon={<ArrowLeftIcon />}
          onClick={handleBack}
        >
          Back
        </Button>
      </Flex>
    </>
  );
};

export default UniversityPage;

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{
    universityId: string;
  }>
) => {
  const universityId = ctx.params?.universityId!;

  const { getUniversity } = apiUseUniversities();
  const university = await getUniversity(universityId);

  if (university.id === undefined) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
      props: {},
    };
  }

  const description = faker.lorem.paragraphs(3);

  return {
    props: {
      initialUniversity: university,
      description,
    },
  };
};
