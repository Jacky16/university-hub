import { renderHook } from "@testing-library/react";
import useUniversities from "hooks/useUniversities";

describe("Given the useUniversities hook", () => {
  describe("When getUniversities is called with a limit of 50 universities", () => {
    test("The it should return a list of 50 universities", async () => {
      const limitUniversities = 50;

      const {
        result: {
          current: { getUniversities },
        },
      } = renderHook(() => useUniversities());

      const { data: universities } = await getUniversities(limitUniversities);

      expect(universities).toHaveLength(limitUniversities);
    });
  });
});
