const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'Google Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome', // Указывает на использование Google Chrome
        headless: false,   // Установите true, если хотите запускать тесты в фоновом режиме
      },
    },
  ],
});
