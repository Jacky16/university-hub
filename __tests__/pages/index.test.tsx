import HomePage from "@/pages/index";
import { render, screen } from "@testing-library/react";
import RenderWrapper from "mocks/RenderWrapper";
import { HomePageData } from "types/types";

describe("Given the index page", () => {
  const dataHomePage: HomePageData = {
    title: "University Hub",
    description: "The best site to find your FAVORITE UNIVERSITY",
    card: {
      title: "Find your university",
      description:
        "Sure that you find the university that you are looking for. Trust us 😄",
      universitiesHref: "/universities",
    },
  };

  describe("When is rendered with Home page Data", () => {
    test("Then it should show a title called 'The best site to find your FAVORITE UNIVERSITY'", () => {
      const firstTitle = "The best site to find your";
      const secondTitle = "FAVORITE UNIVERSITY";

      render(<HomePage data={dataHomePage} />, {
        wrapper: RenderWrapper,
      });

      const title = screen.getByText(firstTitle);

      const title2 = screen.getByText(secondTitle);

      expect(title).toBeInTheDocument();
      expect(title2).toBeInTheDocument();
    });
  });

  test("Then it should show a link to the universities page list with a href '/universities'", () => {
    const expectedHref = "/universities";
    const nameLink = "Universities";

    render(<HomePage data={dataHomePage} />, {
      wrapper: RenderWrapper,
    });

    const link = screen.getByRole("link", { name: nameLink });

    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute("href", expectedHref);
  });
});
