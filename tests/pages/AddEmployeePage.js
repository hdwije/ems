import { expect } from '@playwright/test';
import { emailRegex, nameRegex, phoneRegex } from '../config/regex';

class AddEmployeePage {
  page = undefined;

  constructor(page) {
    this.page = page;
  }

  async getTitle() {
    return await this.page.locator('#add-employee-title');
  }

  async getErrorOfFirstName() {
    return await this.page.locator('#add-first-name-field-helper-text');
  }

  async getErrorOfLastName() {
    return await this.page.locator('#add-last-name-field-helper-text');
  }

  async getErrorOfEmail() {
    return await this.page.locator('#add-email-field-helper-text');
  }

  async getErrorOfNumber() {
    return await this.page.locator('#add-number-field-helper-text');
  }

  async clickOnAdd() {
    await this.page.click('#add-btn');
  }

  async getSuceessMessage() {
    return await this.page.locator('#add-success-message');
  }

  async enterFirstName(firstName) {
    await this.page.locator('#add-first-name-field').fill(firstName);
  }

  async enterLastName(lastName) {
    await this.page.locator('#add-last-name-field').fill(lastName);
  }

  async enterEmail(email) {
    await this.page.locator('#add-email-field').fill(email);
  }

  async enterNumber(number) {
    await this.page.locator('#add-number-field').fill(number);
  }

  async validateFirstName(firstName) {
    await this.enterFirstName(firstName);
    await this.clickOnAdd();

    const errorHelper = await this.getErrorOfFirstName();

    if (firstName.match(nameRegex)) {
      expect(errorHelper).not.toBeVisible();
    } else {
      expect(errorHelper).toBeVisible();
    }
  }

  async validateLastName(lastName) {
    await this.enterLastName(lastName);
    await this.clickOnAdd();

    const errorHelper = await this.getErrorOfLastName();

    if (lastName.match(nameRegex)) {
      expect(errorHelper).not.toBeVisible();
    } else {
      expect(errorHelper).toBeVisible();
    }
  }

  async validateEmail(email) {
    await this.enterEmail(email);
    await this.clickOnAdd();

    const errorHelper = await this.getErrorOfEmail();

    if (email.match(emailRegex)) {
      expect(errorHelper).not.toBeVisible();
    } else {
      expect(errorHelper).toBeVisible();
    }
  }

  async validateNumber(number) {
    await this.enterNumber(number);
    await this.clickOnAdd();

    const errorHelper = await this.getErrorOfNumber();

    if (number.match(phoneRegex)) {
      expect(errorHelper).not.toBeVisible();
    } else {
      expect(errorHelper).toBeVisible();
    }
  }

  async fillFormWithCorrectValues({ firstName, lastName, email, number }) {
    await this.page.waitForTimeout(2000);
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterEmail(email);
    await this.enterNumber(number);
    await this.clickOnAdd();
    expect(await this.getSuceessMessage()).toBeVisible();
  }
}

export default AddEmployeePage;
