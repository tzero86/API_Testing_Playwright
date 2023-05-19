# API Automation with Playwright

This is a base solution to automate API tests using Playwright. The bare bones of the framework are build with plain JavaScript and the tests are written in Playwright's test runner. But the actual consolidated version introduces Cucumber, Step-Definitions written in TypeScript and additional logic to handle hosts, environments and test data. Therefore it is recommended to use the consolidated version of this framework.



## Getting Started

To get started CD into the e2e folder and install the dependencies:

```bash
cd e2e
npm install
```
Once that is done, it's time to get familiar with the project structure.

- `e2s/config` folder: Contains the json payloads for API testing as well as the `hosts.json` file where you can define the hosts for your environments.

- `e2e/env` folder: Contains the `common.env` where the general framework settings and paths are defined.

- `e2e/reports` folder: Contains the `Cucumber-HTML-report.html` file where the API test results are published.

- `e2e/src/features` folder: Contains the feature files for the API tests written in Gherkin/Cucumber.

- `e2e/src/step-definitions` folder: Contains the step definitions for the API tests written in TypeScript. Inside this folder you can also find, the different layers of logic to interact with the different API methods (GET, POST, PUT, DELETE, and PATCH).



## Running the tests

You can use the provided scripts (run_tests.sh/.bat) to execute the tests as follows:

```bash
./run_tests.sh <tag>
```
Being <tag> any of the following: `dev, smoke, regression`. You can define additional tags for your feature files under `src/index.ts`

I promise to document this a bit better in the future. For now, I hope this proves useful to you.

Happy testing!
@tzero86