import { describe, it } from "mocha";

describe("Given the home page", () => {
  describe("When user visits the home page", () => {
    it("Then the page should have a header with a link  inside of heading level 1 with name 'University HUB'", () => {
      const expectedHeader = "University HUB";

      cy.visit("/");

      cy.get("h1").should("contain", expectedHeader);

      cy.get("h1 a").should("have.attr", "href", "/");
    });
  });
});
