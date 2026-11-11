const { until } = require("selenium-webdriver");
const config = require("../../config/env");

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async open(path = "") {
    await this.driver.get(new URL(path, config.baseUrl).toString());
  }

  async click(locator) {
    const element = await this.driver.wait(until.elementLocated(locator), config.timeout);
    await this.driver.wait(until.elementIsVisible(element), config.timeout);
    await element.click();
  }

  async type(locator, value) {
    const element = await this.driver.wait(until.elementLocated(locator), config.timeout);
    await element.clear();
    await element.sendKeys(value);
  }

  async text(locator) {
    const element = await this.driver.wait(until.elementLocated(locator), config.timeout);
    return element.getText();
  }

  async isVisible(locator) {
    try {
      const element = await this.driver.wait(until.elementLocated(locator), config.timeout);
      return await element.isDisplayed();
    } catch {
      return false;
    }
  }
}

module.exports = BasePage;
