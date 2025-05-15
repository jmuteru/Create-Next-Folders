// TODO: This feature is for future use ...
export const cliPrompts = [
  {
    type: 'select',
    name: 'router',
    message: 'Choose the routing strategy for the project:',
    choices: [
      { title: 'Page Router (Traditional)', value: 'pageRouter' },
      { title: 'App Router (Next.js 13+)', value: 'appRouter' },
    ],
  },
];
