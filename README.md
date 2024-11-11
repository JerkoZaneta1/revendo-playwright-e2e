# Playwright_native

## E2E tests

​

### How to install:

​

1. Install node if its not present on system (https://nodejs.org/en/download/)
   ​
2. run `npm install` inside terminal
   ​
3. run `npm install playwright` inside terminal
   ​
4. run `npx playwright install` to download new browsers

5. START HERE IF YOU HAVE PLAYWRIGHT INSTALLED
   run `npm install -D @playwright/test`
   ​
6. run `npx playwright test tests/dekstop.test.js --workers=1` inside terminal.
   This will open a new browser tab and execute the test automatically.​
   There is a variable called `testsWillBeRunXTimes` inside **desktop.test.js** file that can be changed to run the test multiple times.
