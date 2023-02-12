import Layout from "@/components/Layout";
import { render, screen } from "@testing-library/react";

describe("Given the Layout component", () => {
  describe("When it is rendered with a paragraph with content 'This is a test'", () => {
    test("Then it should show the paragraph", () => {
      const expectedText = "This is a test";

      render(
        <Layout>
          <p>This is a test</p>
        </Layout>
      );

      const paragraph = screen.getByText(expectedText);

      expect(paragraph).toBeInTheDocument();
    });

    test("Then the layout should have a main tag", () => {
      render(
        <Layout>
          <p>This is a test</p>
        </Layout>
      );

      const main = screen.getByRole("main");

      expect(main).toBeInTheDocument();
    });
  });
});
