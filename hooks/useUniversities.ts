import endpoints from "routes/apiEndpoints";
import { University, UniversityResponse } from "types/types";
import fetch from "node-fetch";

const { listOfUniversities, getUrlUniversity } = endpoints;

const useUniversities = () => {
  const getUniversities = async (perPage: number, pageParam = 0) => {
    const url = new URL(listOfUniversities);

    url.searchParams.set("pagination[page]", pageParam.toString());
    url.searchParams.set("pagination[pageSize]", perPage.toString());
    url.searchParams.set("pagination[withCount]", "true");

    const response = await fetch(url);
    const data: UniversityResponse = await response.json();

    return data;
  };

  const getUniversity = async (id: number | string) => {
    const url = new URL(getUrlUniversity(id));

    const response = await fetch(url);

    const universityData = (await response.json()) as University;

    return universityData;
  };

  return { getUniversities, getUniversity };
};

export default useUniversities;
