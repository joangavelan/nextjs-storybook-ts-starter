// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator('full-component', {
    description:
      'creates a new component and all the necessary files for its development',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{name}}.tsx',
        templateFile: 'templates/component.template.hbs'
      },
      {
        type: 'add',
        path: 'stories/{{name}}.stories.tsx',
        templateFile: 'templates/story.template.hbs'
      },
      {
        type: 'add',
        path: 'styles/{{name}}.module.scss',
        templateFile: 'templates/style.template.hbs'
      }
    ]
  })
}
