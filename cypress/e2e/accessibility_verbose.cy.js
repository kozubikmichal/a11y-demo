describe("Accessibility testing with axe", () => {
  it("Should have no accessibility violations on good.html", () => {
    cy.visit("/good.html");

    cy.get("button").contains("Click me");
    cy.get("img").should("have.attr", "alt");
  });

  it("Should report accessibility violations on bad.html", () => {
    cy.visit("/bad.html");

    cy.get("button").contains("Click me");
    cy.get("img").should("have.attr", "alt");
  });
});
