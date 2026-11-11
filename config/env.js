require("dotenv").config();

module.exports = {
  baseUrl: process.env.BASE_URL || "https://www.saucedemo.com/",
  browser: (process.env.BROWSER || "chrome").toLowerCase(),
  headless: (process.env.HEADLESS || "true").toLowerCase() !== "false",
  timeout: Number(process.env.TIMEOUT || 10000)
};
