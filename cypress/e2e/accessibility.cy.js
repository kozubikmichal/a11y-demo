describe("Accessibility testing with axe", () => {
  it("Should have no accessibility violations on good.html", () => {
    cy.visit("/good.html");
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Should report accessibility violations on bad.html", () => {
    cy.visit("/bad.html");
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Should pass on bad.html with extra configuration", () => {
    cy.visit("/bad.html");
    cy.injectAxe();
    cy.checkA11y(
      null,
      null,
      (violations) => {
        violations.forEach((v) => {
          cy.log(`${v.id}: ${v.description} ${v.helpUrl}`);
        });
      },
      true
    );
  });
});
