const { By } = require("selenium-webdriver");
const BasePage = require("./BasePage");

class CartPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.title = By.css(".title");
    this.cartItems = By.css(".cart_item");
    this.checkoutButton = By.id("checkout");
  }

  async titleText() {
    return this.text(this.title);
  }

  async itemCount() {
    return (await this.driver.findElements(this.cartItems)).length;
  }
}

module.exports = CartPage;
