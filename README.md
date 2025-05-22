# Accessibility Demo

This project demonstrates how to test web pages for accessibility using `cypress-axe`. It includes sample pages (`good.html` and `bad.html`) to showcase accessibility best practices and common issues.

## Features

- **Accessibility Testing with `cypress-axe`**:
  - Scan external websites for accessibility violations.
  - Test local HTML files for accessibility compliance.
  - Customize accessibility checks with additional configurations.

- **Demo Pages**:
  - `good.html`: A sample page that follows basic accessibility rules.
  - `bad.html`: A sample page with intentional accessibility issues for testing purposes.

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/a11y-demo.git
   cd a11y-demo
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the local server:

   ```sh
   npm run start
   ```

4. Open Cypress for testing:

   ```sh
   npm run cypress
   ```

## Testing

- **Run Accessibility Tests**:
  - Open Cypress and run the test files under the `cypress/e2e` directory.
  - Tests include:
    - `accessibility.cy.js`: General accessibility checks.
    - `accessibility_verbose.cy.js`: Expliit checks for specific elements.
    - `accessibility_external.cy.js`: Scans an external website for accessibility issues.

## Demo Pages

- **Accessible Page (`good.html`)**:
  - Contains elements that follow basic accessibility guidelines.
  - Example: Images have `alt` attributes, buttons have labels.

- **Inaccessible Page (`bad.html`)**:
  - Contains intentional accessibility issues for testing purposes.
  - Example: Missing `alt` attributes on images, unlabeled buttons.

## Tools Used

- [Cypress](https://www.cypress.io/): End-to-end testing framework.
- [cypress-axe](https://github.com/component-driven/cypress-axe): Accessibility testing plugin for Cypress.
- [serve](https://github.com/vercel/serve): Static file server for serving demo pages.

## License

This project is licensed under the MIT License.
