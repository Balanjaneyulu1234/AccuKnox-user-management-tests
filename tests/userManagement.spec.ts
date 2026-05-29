import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';
import { UserManagementPage } from '../pages/UserManagementPage';
import { testData } from '../utils/testData';

test('User Management E2E Flow - OrangeHRM', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  const userPage = new UserManagementPage(page);

  const username = "user_" + Date.now();

  // Login
  await loginPage.gotoLoginPage();
  await loginPage.login(testData.adminUser, testData.adminPass);

  // Navigate to Admin
  await adminPage.openAdminModule();

  // Add User
  await userPage.clickAddUser();
  await userPage.addUser(
    testData.role,
    testData.employeeName,
    username,
    testData.password
  );

  // Search User
  await userPage.searchUser(username);
  await userPage.validateUser(username);

  // Edit User
  await userPage.editUser(testData.newRole);

  // Validate again
  await userPage.searchUser(username);
  await userPage.validateUser(username);

  // Delete User
  await userPage.deleteUser(username);
});
