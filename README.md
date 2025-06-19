# 10Web AI Website Builder – End-to-End Test

This project contains an automated Playwright test that verifies the flow of generating a website using [10Web's AI Website Builder](https://10web.io/ai-website-builder/).  
It covers input handling, design selection, form submission, and result confirmation.

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sapalamut/10Web-test-task.git
cd 10Web-test-task
npm install
npx playwright install
npx playwright test
npx playwright test tests/mainFlow.spec.ts
.
├── tests/
│   └── mainFlow.spec.ts         # Main Playwright test covering full user flow
├── playwright.config.ts         # Playwright config with timeouts and settings
├── package.json                 # Project metadata and dependencies
└── README.md                    # You're here!
