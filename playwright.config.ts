import { defineConfig } from '@playwright/test';

export default defineConfig({
  testMatch: [
    'tests/unit/addEmployee.test.js',
    'tests/integration/addEmployee.test.js',
  ],
  use: {
    baseURL: 'http://localhost:3000',
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
        open: 'on-failure',
      },
    ],
  ],
});
