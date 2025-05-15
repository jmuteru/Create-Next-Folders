export const folderStructure = {
  // Page router...
  pageRouter: [
    "pages/api",               // API routes
    "components/common",       // Reusable common components
    "components/layout",       // Layout components
    "styles",                  // Global styles
    "public",                  // Static files (images, fonts)
    "hooks",                   // Custom React hooks
    "contexts",                // React context for global state
    "services",                // API calls and services
    "store",                   // Store for state management (Redux / Zustand / Mobx)
    "types",                   // TypeScript types
    "utils",                   // Utility files
    "tests/unit",              // Unit tests
    "tests/integration",       // Integration tests
  ],

  // App router...
  appRouter: [
    "app/api",                 // API routes for app router
    "components/common",       // Reusable common components
    "components/layout",       // Layout components
    "styles",                  // Global styles
    "public",                  // Static files (images, fonts)
    "hooks",                   // Custom React hooks
    "contexts",                // React context for global state
    "services",                // API calls and services
    "store",                   // Store for state management (Redux / Zustand / Mobx)
    "types",                   // TypeScript types
    "utils",                   // Utility files
    "tests/unit",              // Unit tests
    "tests/integration",       // Integration tests
  ],
};
