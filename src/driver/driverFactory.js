const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const config = require("../../config/env");

async function createDriver() {
  if (config.browser !== "chrome") {
    throw new Error(`Unsupported browser "${config.browser}". This starter project is configured for Chrome.`);
  }

  const options = new chrome.Options();
  options.addArguments("--window-size=1440,1000", "--disable-dev-shm-usage", "--no-sandbox");
  if (config.headless) options.addArguments("--headless=new");

  // Selenium Manager (bundled with Selenium 4) resolves the matching driver.
  return new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
}

module.exports = { createDriver };
