import chalk from 'chalk';

export const asciiArt = () => {
  console.log(
    chalk.cyan(`
📦 Next.js Project
├── 📁 components
│   ├── 📁 common
│   └── 📁 layout
├── 📁 contexts
├── 📁 hooks
├── 📁 services
├── 📁 store
├── 📁 types
├── 📁 utils
├── 📁 tests
│   ├── 📁 unit
│   └── 📁 integration
├── 📁 styles
├── 📁 public
└── 📁 app/pages

Scaffolding your Next.js project... 🛠️
`)
  );
};
