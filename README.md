# Nuxt 4 Boilerplate

![Build and Test status](https://github.com/TreyRuffy/Nuxt-Boilerplate/actions/workflows/build-and-test.yml/badge.svg)
[![Deploy status](https://github.com/TreyRuffy/Nuxt-Boilerplate/actions/workflows/github-pages.yml/badge.svg)](https://treyruffy.github.io/Nuxt-Boilerplate/)

![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![ESLint](https://img.shields.io/badge/code%20style-ESLint-4B32C3.svg)
![Repo Size](https://img.shields.io/github/repo-size/TreyRuffy/Nuxt-Boilerplate.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A boilerplate for quickly getting started with [Nuxt 4](https://nuxt.com/) applications.
This template includes [TypeScript](https://www.typescriptlang.org/), [Nuxt UI](https://ui3.nuxt.dev/),
[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Pinia](https://pinia.vuejs.org/),
[GitHub Pages deployment](https://pages.github.com/), [Vitest](https://vitest.dev/), and more.

## Features

- **Nuxt 4 with TypeScript**: Uses Nuxt 4's app directory and supports TypeScript with strict type-checking.
- **Tailwind CSS with Typography**: Provides utility-first CSS and optimized typography for rich text content.
- **Testing Setup**: Includes Vitest with coverage, and Playwright for end-to-end testing.
- **Linting and Formatting**: Configured with ESLint and Prettier for code consistency.
- **GitHub Pages Ready**: Configure with GitHub Pages deployment.

## Getting Started

1.  **Create a new repository from this template**:
    Click the ["Use this template" button](https://github.com/new?template_name=Nuxt-Boilerplate&template_owner=TreyRuffy) to create a new repository from this template.

2.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

3.  **Install dependencies**:

    ```bash
    # yarn
    yarn install

    # pnpm
    pnpm install

    # bun
    bun install

    # npm
    npm install
    ```

4.  **Set up environment variables**:
    Fill out the `.env.example` file and copy it to `.env`.

5.  **Set up GitHub Pages deployment** (Optional):
    Update the `deploy:gh` run configuration in `package.json` to match your repository name.
    Replace `GITHUB_PAGES_REPO` with your GitHub Pages repository name.

6.  **Start the development server**:

    ```bash
    # yarn
    yarn dev

    # pnpm
    pnpm dev

    # bun
    bun run dev

    # npm
    npm run dev
    ```

7.  **Open the application**:
    Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## Available Scripts

A list of available scripts for this project.
Run with `yarn <script>`, `pnpm <script>`, `bun run <script>`, or `npm run <script>`.

> The project is set up for `yarn`, other package managers may require updating the scripts in `package.json`.

- `build` - Builds the application for production.
- `dev` - Starts the development server.
- `generate` - Generates a static version of the application.
- `preview` - Preview the static version of the application.
- `postinstall` - Runs after installing dependencies to prepare the application.
- `test` - Runs the test suite with Vitest.
- `coverage` - Runs the test suite with code coverage.
- `lint:eslint` - Lints files with ESLint.
- `lint:prettier` - Formats files with Prettier.
- `lint` - Lints and formats files with ESLint and Prettier.
- `lintfix` - Fixes linting and formatting issues.
- `deploy:gh` - Deploys the application to GitHub Pages.
- `typecheck` - Type-checks the application with TypeScript.

---

## Configuration

- **Environment Variables**:
  - Environment variables are loaded from the `.env` file.
  - Create a `.env` file from the `.env.example` file and fill out the required variables.
  - The `.env.example` file can be uploaded to the repository as a template for contributors.
  - **Note**: Do not commit the `.env` file to the repository and do not include sensitive information in the `.env.example` file.
- **EditorConfig**:
  - [EditorConfig](https://editorconfig.org/) is used to maintain consistent coding styles between different editors and IDEs.
  - The `.editorconfig` file contains the configuration for the project.
  - You may need to install an EditorConfig plugin for your editor to use this configuration.
  - VS Code users can install the [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension.
  - Other editors may have built-in support for EditorConfig.
- **ESLint**:
  - [ESLint](https://eslint.org/) is used to lint files.
  - The `eslint.config.mjs` file contains the ESLint configuration for the project.
  - It is set up using [Nuxt ESLint](https://eslint.nuxt.com/) and [Antfu's ESLint configuration](https://github.com/antfu/eslint-config).
- **Prettier**:
  - [Prettier](https://prettier.io/) is used to format files.
  - The `.prettierrc.json` file contains the Prettier configuration for the project.
  - The `.prettierignore` file contains the files to ignore when formatting.

---

## Modules and Dependencies

- [**Nuxt 4**](https://nuxt.com/): The core framework for building the application.
- [**TypeScript**](https://www.typescriptlang.org/): Adds TypeScript support to the project.
- [**Nuxt UI**](https://ui3.nuxt.dev/): Easily create UI components with TailwindCSS.
- [**Pinia**](https://pinia.vuejs.org/): State management library.
- [**VueUse**](https://vueuse.org/): Collection of useful Vue composition functions.
- [**Nuxt Image**](https://image.nuxt.com/): Optimized image loading.
- [**Nuxt Icon**](https://github.com/nuxt/icon): Icon components.
- [**Nuxt Test Utils**](https://nuxt.com/docs/getting-started/testing): Testing utilities.

---

## Directory Structure

- **`.github/`**: Contains GitHub Actions workflows.
- **`app/`**: Contains the application source code.
  - **`components/`**: Contains Vue components.
  - **`layouts/`**: Contains layout components.
  - **`pages/`**: Contains the application pages.
  - **`utils/`**: Contains utility functions.
- **`e2e/`**: Contains end-to-end tests.
- **`public/`**: Contains static assets.
- **`server/`**: Contains server-side code.
- **`shared/`**: Contains shared utility files.
- **`stores/`**: Contains Pinia store modules.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.
