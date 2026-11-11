const { By } = require("selenium-webdriver");
const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.username = By.id("user-name");
    this.password = By.id("password");
    this.loginButton = By.id("login-button");
    this.error = By.css("[data-test='error']");
  }

  async login(username, password) {
    await this.type(this.username, username);
    await this.type(this.password, password);
    await this.click(this.loginButton);
  }

  async errorMessage() {
    return this.text(this.error);
  }
}

module.exports = LoginPage;
