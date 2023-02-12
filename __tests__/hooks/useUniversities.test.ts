import { renderHook } from "@testing-library/react";
import useUniversities from "hooks/useUniversities";
import { mockUniversity } from "mocks/mockUniversities";

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

  describe(`When getUniversity is called with id ${mockUniversity.id}`, () => {
    test("Then it should return the university", async () => {
      const expectedUniversity = mockUniversity;

      const {
        result: {
          current: { getUniversity },
        },
      } = renderHook(() => useUniversities());

      const university = await getUniversity(expectedUniversity.id);

      expect(university).toEqual(expectedUniversity);
    });
  });
});
