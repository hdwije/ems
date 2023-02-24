import { defineConfig } from '@playwright/test';

export default defineConfig({
  testMatch: ['tests/unit/addEmployee.test.js'],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  retries: 0,
  reporter: [
    ['dot'],
    [
      'json',
      {
        outputFile: 'jsonReports/jsonRepot.json',
      },
    ],
    [
      'html',
      {
        open: 'never',
      },
    ],
  ],
});