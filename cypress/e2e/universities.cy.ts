import { describe, it } from "mocha";

describe("Given the universities page", () => {
  describe("When user visits the universities page", () => {
    it("Then the page should have a header with a link  inside of heading level 1 with name 'University HUB'", () => {
      const expectedHeader = "University HUB";

      cy.visit("/universities");

      cy.get("h1").should("contain", expectedHeader);

      cy.get("h1 a").should("have.attr", "href", "/");
    });
  });

  describe("When user click on link of header", () => {
    it("Then the page should redirect to home page", () => {
      cy.visit("/universities");

      cy.get("h1 a").click();

      cy.url().should("eq", "http://localhost:3000/");
    });
  });
});
