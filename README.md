 OrangeHRM User Management Automation (Playwright + TypeScript)

   


---

📌 Project Overview

This project automates the User Management module of OrangeHRM using Playwright with TypeScript and follows the Page Object Model (POM) design pattern.

It demonstrates a complete real-world QA automation workflow including:

Login functionality

Admin module navigation

User creation

User search

Validation

User deletion



---

🔗 Application Under Test

👉 https://opensource-demo.orangehrmlive.com/web/index.php/auth/login


---

🎯 Objective

This project is built to demonstrate:

UI automation using Playwright

End-to-end HRM workflow testing

Scalable automation framework design

POM-based architecture

Clean test data management



---

🧰 Tech Stack

⚡ Playwright

📘 TypeScript

🟢 Node.js

🏗 Page Object Model (POM)

🧪 Git & GitHub



---

📁 Project Structure

orangehrm-playwright/
│
├── pages/                  # Page Object Models
│   ├── LoginPage.ts
│   ├── AdminPage.ts
│   ├── UserManagementPage.ts
│
├── tests/                  # Test scripts
│   ├── userManagement.spec.ts
│
├── utils/                  # Test data
│   ├── testData.ts
│
├── playwright.config.ts
├── package.json
└── README.md


---

🔄 Automation Flow

1. Launch OrangeHRM application


2. Login with Admin credentials


3. Navigate to Admin module


4. Add a new user


5. Search created user


6. Validate user presence


7. Delete the user




---

🧪 Test Scenarios Covered

✔ Login validation

✔ Admin module navigation

✔ Add user functionality

✔ Search user functionality

✔ Validate created user

✔ Delete user functionality



---

📸 Screenshots

🔐 Login Page



🧭 Admin Dashboard



➕ Add User Screen



🔍 Search User Result




---

⚙️ Installation & Setup

1. Clone Repository

git clone https://github.com/your-username/orangehrm-playwright.git
cd orangehrm-playwright

2. Install Dependencies

npm install

3. Install Playwright Browsers

npx playwright install


---

🚀 Run Tests

▶ Run all tests

npx playwright test

🖥 Run in UI mode

npx playwright test --ui

📄 Run specific test file

npx playwright test tests/userManagement.spec.ts


---

📊 View Reports

npx playwright show-report


---

🧾 Test Data Management

All reusable test data is stored in:

utils/testData.ts

✔ Avoids hardcoding
✔ Improves maintainability
✔ Easy updates


---

📌 Key Features

🏗 Page Object Model architecture

♻ Reusable test components

⚡ Fast Playwright execution

🧪 End-to-end workflow coverage

📊 Built-in HTML reports



---

🎓 What This Project Demonstrates

This project shows strong QA automation skills in:

Test framework design

UI automation strategy

Real-world business workflow testing

Clean coding practices in TypeScript

Scalable test architecture



---

🏁 Conclusion

This is a production-style QA automation framework built using Playwright.
It is structured to be scalable, maintainable, and interview-ready.


---

👨‍💻 Author

QA Automation Engineer (Fresher Level Project)
Built using Playwright + TypeScript + POM


---

⭐ If 
