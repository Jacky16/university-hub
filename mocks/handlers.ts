import { getUniversities } from "@factories/universityFactory";
import { rest } from "msw";
import endpoints from "routes/apiEndpoints";
import { UniversityResponse } from "types/types";

const { listOfUniversities } = endpoints;
export const handlers = [
  rest.get(listOfUniversities, (req, res, ctx) => {
    const limit = req.url.searchParams.get("pagination[pageSize]");

    const universities = getUniversities(Number(limit));

    const response: UniversityResponse = {
      data: universities,
      meta: {
        pagination: {
          page: 1,
          pageSize: Number(limit),
          total: universities.length,
          pageCount: Number(limit),
        },
      },
    };

    return res(ctx.json(response));
  }),
];
