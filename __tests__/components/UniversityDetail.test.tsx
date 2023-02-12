import UniversityDetail from "@/components/UniversityDetail";
import { getUniversity } from "@factories/universityFactory";
import { render, screen } from "@testing-library/react";

describe("Given the UniversityDetail component", () => {
  describe("When it's render with a university", () => {
    const university = getUniversity();

    test(`Then it should show the heading level 2 with the name ${university.name}`, () => {
      const expectedName = university.name;

      render(<UniversityDetail university={university} description={""} />);

      const name = screen.getByRole("heading", {
        level: 2,
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });

    test(`Then it should show image with the logo of the university and alt text called "Logo of ${university.name}"`, () => {
      const expectedAltText = `Logo of ${university.name}`;

      render(<UniversityDetail university={university} description={""} />);

      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show the description of the university and heading level 3 with name 'Description'", () => {
      const expectedDescription = "This is a description";
      const nameHeading = "Description";

      render(
        <UniversityDetail
          university={university}
          description={expectedDescription}
        />
      );

      const heading = screen.getByRole("heading", {
        level: 3,
        name: nameHeading,
      });
      const description = screen.getByText(expectedDescription);

      expect(description).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });
});
