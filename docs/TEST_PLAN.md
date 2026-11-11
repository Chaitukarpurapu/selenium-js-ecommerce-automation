# Test Plan – SauceDemo UI Regression

## Objective
Verify critical login, product listing, and cart workflows through automated browser tests.

## Scope
Included:
- Standard-user login
- Invalid-login validation
- Product inventory rendering
- Add-to-cart interaction
- Cart item verification

Not included:
- Payment processing
- Real customer data
- Security penetration testing
- Production load testing

## Test approach
- UI automation: Selenium WebDriver with JavaScript
- Test runner: Mocha
- Assertions: Chai
- Design: Page Object Model
- Execution: local Chrome and GitHub Actions headless Chrome

## Entry criteria
- Node.js and Chrome installed
- Dependencies installed with `npm install`
- Public demo application reachable

## Exit criteria
- All defined automated scenarios complete
- Failures are reviewed and documented before treating a run as passed

## Risks
- Public demo site availability or UI changes may affect test stability.
- Browser/driver compatibility may affect local execution.
- Network delays may cause timeouts; explicit waits are used to reduce timing-related flakiness.

## Defect report template
- Defect ID:
- Summary:
- Environment:
- Preconditions:
- Steps to reproduce:
- Expected result:
- Actual result:
- Severity / Priority:
- Evidence (screenshot or log):
- Status:
