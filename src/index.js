#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import prompts from 'prompts';
import { folderStructure } from './constants/folderStructure';
import cliPrompts from './constants/cliPrompts';

(async () => {
  const response = await prompts(cliPrompts);

  const ext = response.language === 'ts' ? 'ts' : 'js';
  const routerType = response.router;
  const rootDir = process.cwd();

  console.log(chalk.green(`\nSetting up the Next.js project structure with ${routerType} in ${rootDir}...`));

  // Make directories based on router ...
  folderStructure[routerType].forEach((folder) => {
    const fullPath = path.join(rootDir, folder);
    fs.mkdirSync(fullPath, { recursive: true });
  });

  // Create starter/sample files depending on the selected router ...
  const starterFiles = {
    [`${routerType === 'pageRouter' ? 'pages' : 'app'}/index.${ext}`]: `import React from 'react';\n\nexport default function Home() {\n  return <div>Hello, World!</div>;\n}`,
    [`${routerType === 'pageRouter' ? 'pages' : 'app'}/api/hello.${ext}`]: `export default function handler(req, res) {\n  res.status(200).json({ message: 'Hello, Next.js!' });\n}`,
    [`components/common/Header.${ext}`]: `import React from 'react';\n\nconst Header = () => {\n  return <header><h1>Welcome to Next.js</h1></header>;\n};\n\nexport default Header;`,
    [`components/layout/MainLayout.${ext}`]: `import React from 'react';\nimport Header from '../common/Header';\n\nconst MainLayout = ({ children }) => {\n  return (\n    <div>\n      <Header />\n      <main>{children}</main>\n    </div>\n  );\n};\n\nexport default MainLayout;`,
    [`styles/globals.${ext === 'ts' ? 'ts' : 'js'}`]: `import '../styles/globals.css';\n\nexport default function App({ Component, pageProps }) {\n  return <Component {...pageProps} />;\n}`,
    [`public/favicon.ico`]: 'favicon', 
  };

  Object.entries(starterFiles).forEach(([filePath, content]) => {
    fs.writeFileSync(path.join(rootDir, filePath), content);
  });

  console.log(chalk.green('\nYour Next.js project setup complete! Happy coding!🧑🏿‍💻'));
})();
