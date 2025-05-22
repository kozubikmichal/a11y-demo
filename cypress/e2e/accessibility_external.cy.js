describe("Accessibility testing with axe", () => {
  it("Scans the https://www.digital-futures.eu/meetups/brno-testing-meetup-2025/ site", () => {
    cy.visit(
      "https://www.digital-futures.eu/meetups/brno-testing-meetup-2025/"
    );
    cy.injectAxe();
    cy.checkA11y();
  });
});
