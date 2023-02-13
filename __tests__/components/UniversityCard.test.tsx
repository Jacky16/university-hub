import UniversityCard from "@/components/UniversityCard";
import { render, screen } from "@testing-library/react";
import { getUniversity } from "@factories/universityFactory";

describe("Given the UniversityCard component", () => {
  describe("When it's rendered with a universityProp", () => {
    const university = getUniversity();

    test(`Should render the university name inside of heading level 2 with name ${university.name}`, () => {
      const expectedUniversityName = university.name;

      render(<UniversityCard university={university} />);

      const universityName = screen.getByRole("heading", {
        level: 2,
        name: expectedUniversityName,
      });

      expect(universityName).toBeInTheDocument();
    });

    test(`Should render image with alt text 'Logo of ${university.name}`, () => {
      const expectedAltText = `Logo of ${university.name}`;

      render(<UniversityCard university={university} />);

      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });

    test(`Should render a link with href ${university.slug} and name 'More Details'`, () => {
      const nameLink = "More details";
      const expectedHref = `universities/${university.slug}`;

      render(<UniversityCard university={university} />);

      const link = screen.getByRole("link", { name: nameLink });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", expectedHref);
    });
  });
});
