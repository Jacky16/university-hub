import UniversityCardList from "@/components/UniversityCardList";
import { getUniversities } from "@factories/universityFactory";
import { render, screen } from "@testing-library/react";

describe("Given the UniversityCardList component", () => {
  describe("When it's rendered with 5 universities", () => {
    test("Then it should show 5 articles", () => {
      const universities = getUniversities(5);

      render(<UniversityCardList universities={universities} />);

      const articles = screen.getAllByRole("article");

      expect(articles).toHaveLength(5);
    });
  });
});
