import Home from "@/pages/index";
import { fireEvent, render, screen } from "@testing-library/react";
import RenderWrapper from "mocks/RenderWrapper";
import useInfinityUniversities from "hooks/useInfinityUniversities";
import { getUniversities } from "@factories/universityFactory";

const mockedUseInfinityUniversities = useInfinityUniversities as jest.Mock<any>;

jest.mock("../../hooks/useInfinityUniversities");

describe("Given the index page", () => {
  beforeEach(() => {
    mockedUseInfinityUniversities.mockReturnValue({
      universities: [],
      isLoading: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 with name 'Universities'", () => {
      const expectedTitle = "Universities";

      render(<Home />, { wrapper: RenderWrapper });

      const title = screen.getByRole("heading", {
        level: 2,
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show 50 universities", async () => {
      const expectedUniversities = 50;

      mockedUseInfinityUniversities.mockReturnValue({
        universities: getUniversities(expectedUniversities),
        isLoading: false,
        hasNextPage: true,
      });

      render(<Home />, { wrapper: RenderWrapper });

      const universities = screen.getAllByRole("listitem");

      expect(universities.length).toBe(expectedUniversities);
    });
  });

  describe("When is loading data of universities", () => {
    test("Then it should show a spinner", () => {
      const expectedNameSpinner = "Loading...";

      render(<Home />, { wrapper: RenderWrapper });

      const spinner = screen.getByText(expectedNameSpinner);

      expect(spinner).toBeInTheDocument();
    });
  });

  describe("When the user scrolls down", () => {
    test("Then it fetchNextPage should be called", async () => {
      const mockFetchNextPage = jest.fn();

      mockedUseInfinityUniversities.mockReturnValue({
        universities: [],
        isLoading: false,
        hasNextPage: true,

        fetchNextPage: mockFetchNextPage,
      });

      render(<Home />, { wrapper: RenderWrapper });

      await fireEvent.scroll(window, {
        target: {
          scrollY: 1000,
        },
      });

      expect(mockFetchNextPage).toHaveBeenCalled();
    });
  });
});
