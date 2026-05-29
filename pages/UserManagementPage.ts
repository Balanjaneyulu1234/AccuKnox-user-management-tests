import { Page, expect } from '@playwright/test';

export class UserManagementPage {
  constructor(private page: Page) {}

  async clickAddUser() {
    await this.page.click('button:has-text("Add")');
  }

  async addUser(role: string, employeeName: string, username: string, password: string) {
    await this.page.click('div[role="button"] >> nth=0');
    await this.page.getByText(role).click();

    await this.page.fill('input[placeholder="Type for hints..."]', employeeName);
    await this.page.keyboard.press('Enter');

    await this.page.fill('input[name="username"]', username);

    const passwordFields = this.page.locator('input[type="password"]');
    await passwordFields.nth(0).fill(password);
    await passwordFields.nth(1).fill(password);

    await this.page.click('button[type="submit"]');
  }

  async searchUser(username: string) {
    await this.page.fill('input[placeholder="Search"]', username);
    await this.page.click('button[type="submit"]');
  }

  async validateUser(username: string) {
    await expect(this.page.getByText(username)).toBeVisible();
  }

  async editUser(newRole: string) {
    await this.page.click('button[title="Edit"]');
    await this.page.getByText(newRole).click();
    await this.page.click('button[type="submit"]');
  }

  async deleteUser(username: string) {
    await this.page.getByRole('row', { name: username }).locator('button').last().click();
    await this.page.getByText('Yes, Delete').click();
  }
    }
