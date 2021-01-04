module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'templates/spec.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{kebabCase name}}.styles.tsx',
        templateFile: 'templates/styles.tsx.hbs'
      }
    ]
  })
}
