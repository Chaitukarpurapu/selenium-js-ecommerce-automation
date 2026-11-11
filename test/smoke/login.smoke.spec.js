const { expect } = require("chai");
const { createDriver } = require("../../src/driver/driverFactory");
const users = require("../../config/users");
const LoginPage = require("../../src/pages/LoginPage");
const InventoryPage = require("../../src/pages/InventoryPage");

describe("Smoke: login", function () {
  this.timeout(60000);
  let driver;

  afterEach(async function () {
    if (driver) await driver.quit();
  });

  it("opens the application and signs in", async function () {
    driver = await createDriver();
    const login = new LoginPage(driver);
    const inventory = new InventoryPage(driver);

    await login.open();
    await login.login(users.standard.username, users.standard.password);

    expect(await inventory.titleText()).to.equal("Products");
  });
});
