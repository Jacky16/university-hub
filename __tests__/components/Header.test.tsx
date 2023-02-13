import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";
import RenderWrapper from "mocks/RenderWrapper";

describe("Given the Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 wit name 'University HUB`", () => {
      const nameHeading = "University HUB";

      render(<Header />, {
        wrapper: RenderWrapper,
      });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: nameHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a link with href '/'", () => {
      const expectedHref = "/";
      const nameLink = "University HUB";

      render(<Header />, {
        wrapper: RenderWrapper,
      });

      const link = screen.getByRole("link", { name: nameLink });

      expect(link).toHaveAttribute("href", expectedHref);
    });
  });
});
