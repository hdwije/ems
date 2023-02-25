import test, { expect } from '@playwright/test';

test.describe('Add employee flow', async () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/employee/list`);
    await page.locator('#add-employee-btn').click();
    expect(page).toHaveURL('/employee/add');
  });
});
