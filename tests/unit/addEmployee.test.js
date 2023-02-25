import test from '@playwright/test';
import AddEmployeePage from '../pages/AddEmployeePage';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/employee/add`);
});

test('First name with empty string', async ({ page }) => {
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.validateFirstName('');
});

test('First name with numbers', async ({ page }) => {
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.validateFirstName('1234');
});

test('First name with 3 letters', async ({ page }) => {
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.validateFirstName('abc');
});

test('First name with 11 letters', async ({ page }) => {
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.validateFirstName('abcdefghijk');
});

test('First name with 8 letters', async ({ page }) => {
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.validateFirstName('Hemantha');
});
