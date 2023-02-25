class ListPage {
  page = undefined;

  constructor(page) {
    this.page = page
  }

  async clickOnAddEmployee() {
    await this.page.locator('#add-employee-btn');
  }
}

export default ListPage;