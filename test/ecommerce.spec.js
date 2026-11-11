const { expect } = require("chai");
const { createDriver } = require("../src/driver/driverFactory");
const users = require("../config/users");
const LoginPage = require("../src/pages/LoginPage");
const InventoryPage = require("../src/pages/InventoryPage");
const CartPage = require("../src/pages/CartPage");

describe("SauceDemo e-commerce UI regression tests", function () {
  this.timeout(60000);

  let driver;
  let loginPage;
  let inventoryPage;

  beforeEach(async function () {
    driver = await createDriver();
    loginPage = new LoginPage(driver);
    inventoryPage = new InventoryPage(driver);
    await loginPage.open();
  });

  afterEach(async function () {
    if (driver) await driver.quit();
  });

  it("TC-LOGIN-001: allows a standard user to log in", async function () {
    await loginPage.login(users.standard.username, users.standard.password);
    expect(await inventoryPage.titleText()).to.equal("Products");
  });

  it("TC-LOGIN-002: displays an error for invalid credentials", async function () {
    await loginPage.login(users.invalid.username, users.invalid.password);
    expect(await loginPage.errorMessage()).to.contain("Username and password do not match");
  });

  it("TC-PRODUCT-001: displays the product inventory after login", async function () {
    await loginPage.login(users.standard.username, users.standard.password);
    expect(await inventoryPage.itemCount()).to.be.greaterThan(0);
  });

  it("TC-CART-001: adds a product and shows the cart badge", async function () {
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addFirstItemToCart();
    expect(await inventoryPage.cartCount()).to.equal("1");
  });

  it("TC-CART-002: shows the selected product in the cart", async function () {
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.openCart();

    const cartPage = new CartPage(driver);
    expect(await cartPage.titleText()).to.equal("Your Cart");
    expect(await cartPage.itemCount()).to.equal(1);
  });
});
