import NotFoundPage from "@/pages/404";
import { render, screen } from "@testing-library/react";
import RenderWrapper from "mocks/RenderWrapper";

describe("Given the 404 not found page", () => {
  describe("When is rendered", () => {
    test("Then it should show a 404 not found message inside of heading level 2", () => {
      const expectedMessage = "404 Not Found 😞";

      render(<NotFoundPage />, {
        wrapper: RenderWrapper,
      });

      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedMessage,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  test("Then it should show a link called Go to Home with href '/'", () => {
    const expectedHref = "/";
    const expectedLinkName = "Go to Home";

    render(<NotFoundPage />, {
      wrapper: RenderWrapper,
    });

    const link = screen.getByRole("link", {
      name: expectedLinkName,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", expectedHref);
  });
});
