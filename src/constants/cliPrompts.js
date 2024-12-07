export const cliPrompts =[
    {
        type: 'select',
        name: 'language',
        message: 'Choose the language for the project:',
        choices: [
          { title: 'TypeScript', value: 'ts' },
          { title: 'JavaScript', value: 'js' },
        ],
      },
      {
        type: 'select',
        name: 'router',
        message: 'Choose the routing strategy for the project:',
        choices: [
          { title: 'Page Router (Traditional)', value: 'pageRouter' },
          { title: 'App Router (Next.js 13+)', value: 'appRouter' },
        ],
      },
]