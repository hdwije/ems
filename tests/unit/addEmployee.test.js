import test from '@playwright/test';
import { createRandomName } from '../helper/employee';
import AddEmployeePage from '../pages/AddEmployeePage';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/employee/add`);
});

test.describe('Test add employee page', async () => {
  test.describe('Test first name', async () => {
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
  });

  test.describe('Test last name', async () => {
    test('Last name with empty string', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateLastName('');
    });

    test('Last name with numbers', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateLastName('1234');
    });

    test('Last name with 3 letters', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateLastName('abc');
    });

    test('Last name with 11 letters', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateLastName('abcdefghijk');
    });

    test('Last name with 8 letters', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateLastName('Hemantha');
    });
  });

  test.describe('Test email', async () => {
    test('Email with incorrect email', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateEmail('abc');
    });

    test('Email with correct email', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateEmail('abc@abc.com');
    });
  });

  test.describe('Test number', async () => {
    test('Number with incorrect number', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateNumber('123');
    });

    test('Number with correct number', async ({ page }) => {
      const addEmployeePage = new AddEmployeePage(page);
      await addEmployeePage.validateNumber('1234567890');
    });
  });

  test('Add male employee happy path', async ({ page }) => {
    const addEmployeePage = new AddEmployeePage(page);
    const firstName = createRandomName(7);
    const lastName = createRandomName(8);
    const email = `${firstName}@${lastName}.com`;
    const number = Math.floor(Math.random() * 10 ** 10);

    addEmployeePage.fillFormWithCorrectValues({
      firstName,
      lastName,
      email,
      number,
    });
  });
});
