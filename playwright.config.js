// @ts-check

const { defineConfig } = require("@playwright/test");
const { devices } = require("@playwright/test");

module.exports = defineConfig({
  projects: [
    {
      name: "Chrome",
      testMatch: /.regresion-desktop.test.js/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Chrome",
      testMatch: /.desktop.test.js/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Chrome",
      testMatch: /.load.test.js/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Android",
      testMatch: /.mobile.test.js/,
      use: {
        ...devices["Pixel 2"],
      },
    },
  ],
  use: {
    headless: false,
    // channel: "chrome",
    viewport: {
      width: 1280,
      height: 720,
    },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    launchOptions: {
      // slowMo: 500,
    },
  },
});
