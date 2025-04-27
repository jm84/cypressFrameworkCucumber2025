# Cypress Cucumber Project

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project integrates Cypress with Cucumber for behavior-driven development (BDD). It allows writing test cases in Gherkin syntax.

## Prerequisites
- Node.js (>=14.x)
- npm 
- Cypress (>=10.x)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/cypress-cucumber.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cypress-cucumber
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
Write your test scenarios in `.feature` files using Gherkin syntax. Implement step definitions in corresponding `.js` files.

## Folder Structure
```
cypress-cucumber/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── example.feature
│   │   ├── step_definitions/
│   │   │   └── exampleSteps.js
│   ├── support/
│   │   └── commands.js
├── package.json
└── README.md
```

## Running Tests
Run tests using the following command:
```bash
npx cypress open
```

Run tests in a especific enviroment  use the following command:
```bash
ENV=DEV npx cypress open
```

Run tests with especific TAG use the following command:
```bash
npx cypress run -e TAGS='@TAGTOEXECUTE' --headed
```

Run tests with  one TAG or other use the following command:
```bash
npx cypress run -e TAGS='(@TAGTOEXECUTE or @otherTag) and not @smoke' --headed
```

Run all feature files use the following command:
```bash
npx cypress run cypress/e2e/*.feature --headed
```