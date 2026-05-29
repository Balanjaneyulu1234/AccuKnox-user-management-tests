import { Page } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  async openAdminModule() {
    await this.page.click('text=Admin');
  }
}
