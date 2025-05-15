#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { folderStructure } from './constants/folderStructure.js';
import { asciiArt } from './constants/ascii.js';

(() => {
  const rootDir = process.cwd();

  // check if the existing next js app uses Page or App router ...
  const usesAppRouter = fs.existsSync(path.join(rootDir, 'app')) || fs.existsSync(path.join(rootDir, 'src', 'app'));
  const usesPagesRouter = fs.existsSync(path.join(rootDir, 'pages')) || fs.existsSync(path.join(rootDir, 'src', 'pages'));

  let routerType = 'appRouter'; //default
  if (usesPagesRouter && !usesAppRouter) {
    routerType = 'pageRouter';
  } else if (usesAppRouter && !usesPagesRouter) {
    routerType = 'appRouter';
  } else if (!usesAppRouter && !usesPagesRouter) {
 
    console.log(chalk.yellow('No "app" or "pages" folder detected. Defaulting to App Router structure.'));
  }

  const baseDir = routerType === 'pageRouter' ? path.join(rootDir, 'src') : rootDir;

  asciiArt();

  console.log(
    chalk.green(
      `\nDetected a ${routerType === 'pageRouter' ? 'Pages Router' : 'App Router'} project. Creating directory structure in ${
        routerType === 'pageRouter' ? 'src/' : 'root/'
      }...`
    )
  );

  // create missing directories only , do not overwrite...
  folderStructure[routerType].forEach((folder) => {
    const fullPath = path.join(baseDir, folder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(chalk.blue(`Created: ${path.relative(rootDir, fullPath)}`));
    } else {
      console.log(chalk.gray(`Skipped (already exists): ${path.relative(rootDir, fullPath)}`));
    }
  });

  asciiArt();
  console.log(chalk.green('\n✅ Directory structure setup complete! 🚀'));
})();
