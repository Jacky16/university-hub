import endpoints from "routes/apiEndpoints";
import { UniversityResponse } from "types/types";

const useUniversities = () => {
  const { listOfUniversities: getListUniversities } = endpoints;

  const getUniversities = async (perPage: number, pageParam = 0) => {
    const url = new URL(getListUniversities);

    url.searchParams.set("pagination[page]", pageParam.toString());
    url.searchParams.set("pagination[pageSize]", perPage.toString());
    url.searchParams.set("pagination[withCount]", "true");

    const response = await fetch(url);
    const data: UniversityResponse = await response.json();

    return data;
  };

  return { getUniversities };
};

export default useUniversities;
