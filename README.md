# Selenium JavaScript E-commerce Automation Framework

A portfolio project demonstrating browser-based UI automation with **Selenium WebDriver + JavaScript**, **Mocha**, **Chai**, the **Page Object Model (POM)**, and **GitHub Actions CI**.

> Test target: [SauceDemo](https://www.saucedemo.com/) public demo application. Use only the published demo credentials in `config/users.js`. Do not use real accounts or private data.

## What this project demonstrates

- Selenium WebDriver browser automation with JavaScript
- Page Object Model for maintainable test code
- Positive and negative login scenarios
- Product inventory validation
- Add-to-cart and cart validation
- Reusable page actions and explicit waits
- Headless Chrome execution
- GitHub Actions workflow for automated test runs on pushes and pull requests

## Test scenarios

| Test ID | Scenario | Expected result |
|---|---|---|
| TC-LOGIN-001 | Login with standard demo user | Products page is displayed |
| TC-LOGIN-002 | Login with invalid credentials | Validation error is displayed |
| TC-PRODUCT-001 | Load product inventory | At least one product is displayed |
| TC-CART-001 | Add first product to cart | Cart badge shows 1 |
| TC-CART-002 | Open cart after adding product | Cart contains one item |

## Tech stack

- Node.js 20+
- JavaScript
- Selenium WebDriver 4
- Mocha
- Chai
- Chrome / ChromeDriver (resolved through Selenium Manager)
- GitHub Actions

## Project structure

```text
selenium-js-ecommerce-automation/
├── .github/workflows/ui-tests.yml
├── config/ (env.js, users.js)
├── docs/TEST_PLAN.md
├── src/driver/driverFactory.js
├── src/pages/ (BasePage, LoginPage, InventoryPage, CartPage)
├── test/ (ecommerce.spec.js, smoke/login.smoke.spec.js)
├── .env.example
├── .gitignore
└── package.json
```

## Run locally

1. Install Node.js 20+ and Google Chrome.
2. Install dependencies: `npm install`
3. Run regression tests: `npm test`
4. Run smoke test: `npm run test:smoke`
5. Run with visible browser: `npm run test:headed`

The first run may take longer because Selenium Manager may need to resolve or download the matching browser driver.

## Configuration

Copy `.env.example` to `.env` if you want to override defaults:

```env
BASE_URL=https://www.saucedemo.com/
BROWSER=chrome
HEADLESS=true
```

Never commit secrets, personal credentials, or private test data.

## Continuous integration

The workflow in `.github/workflows/ui-tests.yml` runs the test suite on pushes and pull requests to `main` or `master`, and can also be started manually from the GitHub Actions tab.

## Quality notes and future improvements

This is a learning/portfolio starter framework, not a claim of production certification. Useful next improvements:

1. Add checkout and logout scenarios.
2. Add API tests and test-data fixtures.
3. Add screenshots and structured test reports on failures.
4. Add cross-browser execution.
5. Add accessibility checks and a defect-report template.
6. Add C# + NUnit Selenium implementation as a separate module to demonstrate the C# requirement in the target job.

## Author

**Chaitanya Kishore Karpurapu**

- GitHub: [@Chaitukarpurapu](https://github.com/Chaitukarpurapu)
- LinkedIn: [Profile](https://www.linkedin.com/in/chaitanya-kishore-karpurapu-410a14242)

---

Built as a software testing portfolio project to demonstrate practical UI automation fundamentals.
