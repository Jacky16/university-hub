import { useInfiniteQuery } from "react-query";
import { University } from "types/types";
import useUniversities from "./useUniversities";

const useInfinityUniversities = (perPage = 50) => {
  const { getUniversities } = useUniversities();

  const result = useInfiniteQuery(
    ["universities"],
    ({ pageParam = 0 }) => getUniversities(perPage, pageParam),
    {
      getNextPageParam(lastPage) {
        const {
          meta: {
            pagination: { page, total, pageSize },
          },
        } = lastPage;

        const totalPages = Math.ceil(total! / pageSize);

        if (page === totalPages) {
          return false;
        }

        return page + 1;
      },
    }
  );

  const universities =
    result?.data?.pages.reduce(
      (prevUniversities: University[], universityPage) =>
        prevUniversities.concat(universityPage.data),
      []
    ) || [];

  return { ...result, universities };
};

export default useInfinityUniversities;
