export const folderStructure = {
  // Page router...
  pageRouter: [
    'pages/api',            // API routes
    'pages/components',     // Components for easy routing and layout management
    'components/common',    // Reusable common components
    'components/layout',    // Layout components
    'styles',               // Global styles
    'public',               // Static files (images, fonts)
    'hooks',                // Custom React hooks
    'contexts',             // React context for global state
    'services',             // API calls and services
    'store',                // Store for state management (Redux / Zustand..)
    'types',                 // TypeScript types
    'utils',                 //Utility files          
    'tests',                // Unit and integration tests
  ],

  // App router...
  appRouter: [
    'app/api',              // API routes for app router
    'app/components',       // Layout components
    'components/common',    // Reusable common components
    'components/layout',    // Layout components
    'styles',               // Global styles
    'public',               // Static files (images, fonts)
    'hooks',                // Custom React hooks
    'contexts',             // React context for global state
    'services',             // API calls and services
    'store',                // Store for state management (Redux / Zustand..)
    'types',                // TypeScript types
    'utils',                 //Utility files          
    'tests',                // Unit and integration tests
  ],
};
