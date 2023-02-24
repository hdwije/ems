import test, { expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/employee/add');
});

test('First name with empty string', async ({ page }) => {
  const addBtn = page.locator("//button[text()='Add']");
  const firstName = page.locator("input[name='firstName']");

  firstName.fill('');
  addBtn.click();
  await page.waitForTimeout(1000);

  expect(page.locator("//p[text()='First name is invalid']")).toHaveText(
    'First name is invalid',
  );
});

test('First name with numbers', async ({ page }) => {
  const addBtn = page.locator("//button[text()='Add']");
  const firstName = page.locator("input[name='firstName']");

  firstName.fill('1234');
  addBtn.click();
  await page.waitForTimeout(1000);

  expect(page.locator("//p[text()='First name is invalid']")).toHaveText(
    'First name is invalid',
  );
});

test('First name with 3 letters', async ({ page }) => {
  const addBtn = page.locator("//button[text()='Add']");
  const firstName = page.locator("input[name='firstName']");

  firstName.fill('abc');
  addBtn.click();
  await page.waitForTimeout(1000);

  expect(page.locator("//p[text()='First name is invalid']")).toHaveText(
    'First name is invalid',
  );
});

test('First name with 11 letters', async ({ page }) => {
  const addBtn = page.locator("//button[text()='Add']");
  const firstName = page.locator("input[name='firstName']");

  firstName.fill('abcdefghijk');
  addBtn.click();
  await page.waitForTimeout(1000);

  expect(page.locator("//p[text()='First name is invalid']")).toHaveText(
    'First name is invalid',
  );
});
