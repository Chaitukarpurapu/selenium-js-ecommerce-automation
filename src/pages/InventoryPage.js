const { By } = require("selenium-webdriver");
const BasePage = require("./BasePage");

class InventoryPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.title = By.css(".title");
    this.inventoryItems = By.css(".inventory_item");
    this.firstAddButton = By.css(".inventory_item button");
    this.cartBadge = By.css(".shopping_cart_badge");
    this.cartLink = By.css(".shopping_cart_link");
    this.sortSelect = By.css("[data-test='product-sort-container']");
  }

  async titleText() {
    return this.text(this.title);
  }

  async itemCount() {
    return (await this.driver.findElements(this.inventoryItems)).length;
  }

  async addFirstItemToCart() {
    await this.click(this.firstAddButton);
  }

  async cartCount() {
    if (!(await this.isVisible(this.cartBadge))) return "0";
    return this.text(this.cartBadge);
  }

  async openCart() {
    await this.click(this.cartLink);
  }
}

module.exports = InventoryPage;
