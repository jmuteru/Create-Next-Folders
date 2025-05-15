# **Create Next Folders** – Next.js Project Scaffold Generator

This tool lets you quickly and easily build clean and consistent project folders for your Next.js applications with App or Page Router.

---

## 🛠️ Features

- ✅ Displays which routing technique is being used (`app/` or `pages/`)
- ✅ Automatically includes commonly used folders for easy use in Next.js apps
- ✅ Non-destructive. It does **not overwrite** existing folders or files
- ✅ Clean and modern folder structure with support for:
  - Components (common + layout)
  - Hooks, Contexts, Services, Store
  - Testing structure (`unit` and `integration`)
  - Static assets (`public`) and styles
- 🔧 Can be updated later to make it possible to add support for new folder templates.

---

## 🚀 **Installation**

You can install the package as a **dev dependency** in your project:

```bash
npm install --save-dev create-next-folders
```

---

## 🛠️ Usage

Once installed in your project, simply run the following command in your terminal:

```bash
npx create-next-folders
```



## 🗂️ **Generated Folder Structure**

### For App router:
```
your-project/
├── app/
│   └── api/
├── components/
│   ├── common/
│   └── layout/
├── contexts/
├── hooks/
├── services/
├── store/
├── styles/
├── public/
├── types/
├── utils/
└── tests/
    ├── unit/
    └── integration/
```

### For Page router:
```
your-project/
├── pages/
│   └── api/
├── components/
│   ├── common/
│   └── layout/
├── contexts/
├── hooks/
├── services/
├── store/
├── styles/
├── public/
├── types/
├── utils/
└── tests/
    ├── unit/
    └── integration/
```

---

## 📝 **Contributing**

Contributions are welcome. Feel free to fork the repository and submit pull requests to improve the functionality and features of **Create Next Folders**.

---

## License

MIT License
