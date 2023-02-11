import { SimpleGrid } from "@chakra-ui/react";
import { University } from "types/types";
import UniversityCard from "./UniversityCard";

interface UniversityCardListProps {
  universities: University[];
}

const UniversityCardList = ({ universities }: UniversityCardListProps) => (
  <SimpleGrid columns={[1, 2, 3]} spacing={24} as="ul">
    {universities.map((university) => (
      <UniversityCard key={university.id} university={university} />
    ))}
  </SimpleGrid>
);

export default UniversityCardList;
