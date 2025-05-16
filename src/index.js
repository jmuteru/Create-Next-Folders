#!/usr/bin/env node

import fs from "fs";
import path from "path";
import chalk from "chalk";
import prompts from "prompts";
import { execSync } from "child_process";
import { folderStructure } from "./constants/folderStructure.js";
import { asciiArt } from "./constants/ascii.js";
import { reactFolderStructure } from "./constants/reactStructure.js";

(async () => {
  asciiArt();

  // Ask user what type of project they want to scaffold
  const response = await prompts({
    type: "select",
    name: "projectType",
    message: "What type of project do you want to scaffold?",
    choices: [
      { title: "Next.js", value: "next" },
      { title: "React (Vite)", value: "react-vite" },
      { title: "React (Create React App)", value: "react-cra" },
    ],
    initial: 0,
  });

  if (response.projectType === "next") {
    await scaffoldNextProject();
  } else if (response.projectType === "react-vite") {
    await scaffoldViteReactProject();
  } else if (response.projectType === "react-cra") {
    await scaffoldReactProject();
  }

  asciiArt();
  console.log(chalk.green("\n✅ Project setup complete! 🚀"));
})();

async function scaffoldNextProject() {
  const rootDir = process.cwd();

  // Check router type (existing logic)
  const usesAppRouter =
    fs.existsSync(path.join(rootDir, "app")) ||
    fs.existsSync(path.join(rootDir, "src", "app"));
  const usesPagesRouter =
    fs.existsSync(path.join(rootDir, "pages")) ||
    fs.existsSync(path.join(rootDir, "src", "pages"));

  let routerType = "appRouter";
  if (usesPagesRouter && !usesAppRouter) {
    routerType = "pageRouter";
  } else if (usesAppRouter && !usesPagesRouter) {
    routerType = "appRouter";
  } else if (!usesAppRouter && !usesPagesRouter) {
    console.log(
      chalk.yellow(
        'No "app" or "pages" folder detected. Defaulting to App Router structure.'
      )
    );
  }

  const baseDir =
    routerType === "pageRouter" ? path.join(rootDir, "src") : rootDir;

  console.log(
    chalk.green(
      `\nDetected a ${
        routerType === "pageRouter" ? "Pages Router" : "App Router"
      } project. Creating directory structure in ${
        routerType === "pageRouter" ? "src/" : "root/"
      }...`
    )
  );

  // Create Next.js folders
  folderStructure[routerType].forEach((folder) => {
    const fullPath = path.join(baseDir, folder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(chalk.blue(`Created: ${path.relative(rootDir, fullPath)}`));
    } else {
      console.log(
        chalk.gray(
          `Skipped (already exists): ${path.relative(rootDir, fullPath)}`
        )
      );
    }
  });
}

async function scaffoldReactProject() {
  const rootDir = process.cwd();

  // Ask for React project configuration
  const config = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Enter your React project name:",
      initial: "my-react-app",
      validate: (value) =>
        value.trim() ? true : "Project name cannot be empty",
    },
    {
      type: "select",
      name: "template",
      message: "Choose a template:",
      choices: [
        { title: "JavaScript", value: "javascript" },
        { title: "TypeScript", value: "typescript" },
      ],
      initial: 0,
    },
    {
      type: "multiselect",
      name: "features",
      message: "Select additional features:",
      choices: [
        { title: "Redux", value: "redux" },
        { title: "React Router", value: "router" },
        { title: "Testing (Jest + React Testing Library)", value: "testing" },
        { title: "SASS/SCSS support", value: "sass" },
      ],
      instructions: false,
      hint: "- Space to select. Return to submit",
    },
  ]);

  const projectPath = path.join(rootDir, config.projectName);

  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red(`Error: Directory "${config.projectName}" already exists!`)
    );
    process.exit(1);
  }

  // Create React project structure
  console.log(
    chalk.green(`\nCreating React project "${config.projectName}"...`)
  );

  // Create base directories
  reactFolderStructure.base.forEach((folder) => {
    const fullPath = path.join(projectPath, folder);
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(chalk.blue(`Created: ${path.relative(rootDir, fullPath)}`));
  });

  // Handle selected features
  if (config.features.includes("redux")) {
    reactFolderStructure.redux.forEach((folder) => {
      const fullPath = path.join(projectPath, folder);
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(
        chalk.blue(`Created: ${path.relative(rootDir, fullPath)} (Redux)`)
      );
    });
  }

  console.log(
    chalk.green(`\nReact project "${config.projectName}" created successfully!`)
  );
  console.log(chalk.blue(`\nNext steps:\n`));
  console.log(`cd ${config.projectName}`);
  console.log("npm install");
  console.log("npm start\n");
}

async function scaffoldViteReactProject() {
  const rootDir = process.cwd();

  // Ask for Vite React project configuration
  const config = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Enter your Vite React project name:",
      initial: "my-vite-app",
      validate: (value) =>
        value.trim() ? true : "Project name cannot be empty",
    },
    {
      type: "select",
      name: "template",
      message: "Choose a template:",
      choices: [
        { title: "JavaScript", value: "javascript" },
        { title: "TypeScript", value: "typescript" },
      ],
      initial: 0,
    },
    {
      type: "multiselect",
      name: "features",
      message: "Select additional features:",
      choices: [
        { title: "Redux", value: "redux" },
        { title: "React Router", value: "router" },
        { title: "Testing (Vitest)", value: "testing" },
        { title: "SASS/SCSS support", value: "sass" },
      ],
      instructions: false,
      hint: "- Space to select. Return to submit",
    },
  ]);

  const projectPath = path.join(rootDir, config.projectName);

  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red(`Error: Directory "${config.projectName}" already exists!`)
    );
    process.exit(1);
  }

  console.log(
    chalk.green(`\nCreating Vite React project "${config.projectName}"...`)
  );

  // Run Vite create command
  const template = `react${config.template === "typescript" ? "-ts" : ""}`;
  execSync(
    `npm create vite@latest ${config.projectName} -- --template ${template}`,
    {
      stdio: "inherit",
      cwd: rootDir,
    }
  );

  // Install additional features if selected
  if (config.features.length > 0) {
    process.chdir(projectPath);
    const packagesToInstall = [];

    if (config.features.includes("redux")) {
      packagesToInstall.push("react-redux @reduxjs/toolkit");
    }
    if (config.features.includes("router")) {
      packagesToInstall.push("react-router-dom");
    }
    if (config.features.includes("sass")) {
      packagesToInstall.push("sass");
    }
    if (config.features.includes("testing")) {
      packagesToInstall.push("vitest @testing-library/react jsdom");
    }

    if (packagesToInstall.length > 0) {
      console.log(chalk.blue("\nInstalling additional features..."));
      execSync(`npm install ${packagesToInstall.join(" ")}`, {
        stdio: "inherit",
      });
    }

    // Create additional directories for  react features
    if (config.features.includes("redux")) {
      reactFolderStructure.redux.forEach((folder) => {
        const fullPath = path.join(projectPath, "src", folder);
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(
          chalk.blue(`Created: ${path.relative(rootDir, fullPath)} (Redux)`)
        );
      });
    }
  }

  console.log(
    chalk.green(
      `\nVite React project "${config.projectName}" created successfully!`
    )
  );
  console.log(chalk.blue(`\nNext steps:\n`));
  console.log(`cd ${config.projectName}`);
  console.log("npm run dev\n");
}
