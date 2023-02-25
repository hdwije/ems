import test, { expect } from '@playwright/test';

test('Add employee flow', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/employee/list`);
  await page.locator('#add-employee-btn').click();
  expect(page).toHaveURL('/employee/add');
});
