# Recruitment Task: Automated Testing with Playwright

## Instructions

1. **Installation of Dependencies:**

   - **Install Playwright:** Install Playwright by running `npm install playwright`.

2. **Running Tests:**

   - After installing dependencies, run automated tests by executing `npm test`. Check the package.json file to ensure that the test running command is properly configured.

3. **Analyzing Results:**
   - After running the tests, analyze the results. Make sure that all tests were executed successfully and no errors occurred.

## Project Structure

- **/tests:** This directory contains automated tests written using Playwright.
- **/src/pom:** This directory contains page objects and components that define methods related to user interactions on individual pages of the application.
- **/src/utils:** This directory contains utility tools, such as functions for handling expected conditions or test environment configuration.
- **/playwright-report:** Optional directory where test reports are stored.

## Project Development Best Practices

- **Modular Test Design:** Write tests in a modular way to ensure reusability and maintainability. Divide tests into small, focused units that verify specific functionalities.
- **Use Page Objects:** Encapsulate page interactions in page objects to abstract away the details of the UI and improve test readability and maintenance.
- **Parameterize Tests:** Parameterize tests to cover different scenarios using data-driven testing approaches. This allows for better test coverage without duplicating code.
- **Handle Waits Properly:** Use appropriate wait strategies (e.g., waitForSelector, waitForNavigation) to ensure that tests wait for elements or events to appear before interacting with them, rather than using arbitrary sleep timeouts.
- **Error Handling:** Implement robust error handling mechanisms to gracefully handle unexpected behavior during test execution. Log errors and failures with sufficient context for easy debugging.
- **Continuous Integration:** Integrate automated tests into the CI/CD pipeline to run tests automatically on each code commit. This ensures early detection of issues and maintains the quality of the application.
- **Regular Maintenance:** Regularly update and maintain tests to keep pace with changes in the application codebase. Refactor tests as needed to improve readability, efficiency, and reliability.

## Author

Author: Tomasz Cichoń
Contact: cichonmail@gmail.com
