# Cypress Automation Test Suite

## Overview
This project is an end-to-end test automation framework built using **Cypress**.  
It follows **industry best practices** such as:

- **Page Object Model (POM)** for clean and maintainable tests
- **Fixtures** for external test data
- **Module-based folder structure** for scalability and readability
- **Custom Commands** Code resuse, more efficient, easier to maintain
---
## Project Structure
```bash
cypress/
│
├── e2e/
│   ├── checkout/
│   │   └── verifycheckout.cy.js
│   └── login/
│       └── verifylogin.cy.js
├── fixtures/
│   ├── customerData.json
│   └── loginData.json
├── support/
│   ├── pages/
│   │   └── LoginPage.js
│   │   └──DashboardPage.js
│   │   └── CheckoutPage.js
│   ├── commands.js
│   └── e2e.js
│
└── cypress.config.js
```

## Structure Highlights
- Tests are organized by application modules
- Page objects separate UI logic from test logic
- Fixtures help avoid hardcoded test data

## Test Suite Setup
**Prerequisites**
- Node.js (v16+ recommended)
- npm or yarn
- Any modern browser (Chrome / Edge)

**Install dependencies**
```bash
npm install
npm install cypress --save-dev
```

**Open Cypress Test Runner**
```bash
npx cypress open
```
Used for interactive execution and debugging.

**Run All Test(headless)**
```bash
npx cypress run
```
Run all test in headless mode

**Run a specific module**
```bash
npx cypress run --spec "cypress/e2e/checkout/*.cy.js"
```



