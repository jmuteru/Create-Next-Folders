
# **Next Foundry** – Next.js Project Scaffold Generator

**Next Foundry** is a command-line tool designed to quickly scaffold a Next.js project with a customizable folder structure. Whether you're using the classic *Pages* router or the new *App* router, **Next Foundry** helps you set up your Next.js environment in seconds. Choose between TypeScript or JavaScript for your project setup, and get started with a clean, organized structure.

---

## 🚀 **Installation**

You can install **Next Foundry** globally or run it directly using `npx` without installing:

### Global Installation

```bash
npm install -g next-foundry
```

### Or use `npx` to run without installation

```bash
npx next-foundry
```

---

## 🛠️ **Usage**

Once installed, simply run the following command in your terminal to initialize a new Next.js project:

```bash
next-foundry
```

### Select Your Options

After running the command, you'll be prompted with a few options to customize your Next.js setup:

1. **Choose the Language**: 
   - Select either `TypeScript` or `JavaScript` based on your project preference.

2. **Choose the Routing Method**: 
   - Choose between the **Pages Router** (traditional routing) or the **App Router** (new routing system).

---

## 🗂️ **Generated Folder Structure**

By default, **next-foundry** creates the following folder structure for your project:

```
/src
  /assets
    /images
    /fonts
  /components
    /common
    /layout
  /features
    /auth
  /hooks
  /contexts
  /services
  /store
    /slices
  /styles
  /utils
  /types
  /tests
    /unit
    /integration
```

In addition to this folder structure, you'll receive template files like `App.tsx` or `App.js`, `index.tsx` or `index.js`, and other basic components to get you started quickly.

---

## 📦 **Dependencies**

- **chalk**: Provides colorful output in the terminal for a better user experience.
- **prompts**: Handles the interactive command-line prompts for customization.

---

## ⚙️ **Customization**

You can easily modify the generated structure by editing the source code in the `src/` folder of **Next Foundry**. Feel free to customize it based on your project’s specific needs.

---

## 📝 **Contributing**

We welcome contributions! Feel free to fork the repository and submit pull requests to improve the functionality and features of **Next Foundry**.

---

## 🏁 **Commands Summary**

- **Global Usage**: After installing **next-foundry** globally, run:

   ```bash
   next-foundry
   ```

- **Without Installation**: Use `npx` to run **Next Foundry** without global installation:

   ```bash
   npx next-foundry
   ```

- **Start Script**: You can also run the tool directly using the start script in your package:

   ```bash
   npm start
   ```

---

## License

MIT License – © Jeff Muteru 🧑🏿‍💻
