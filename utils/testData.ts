// utils/testData.ts

export const testData = {
  // Application URL
  baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",

  // Login Credentials
  validUser: {
    username: "Admin",
    password: "admin123",
  },

  invalidUser: {
    username: "wrongUser",
    password: "wrongPass",
  },

  // User Management Test Data
  newUser: {
    employeeName: "Linda Anderson",
    username: "linda.anderson01",
    password: "User@12345",
    confirmPassword: "User@12345",
    userRole: "ESS",
    status: "Enabled",
  },

  editUser: {
    updatedEmployeeName: "Charlie Carter",
    updatedStatus: "Disabled",
  },

  searchUser: {
    username: "Admin",
  },

  // Timeouts
  timeouts: {
    short: 2000,
    medium: 5000,
    long: 10000,
  },
};
