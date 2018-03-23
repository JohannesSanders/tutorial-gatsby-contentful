const spaceImport = require('contentful-import')
const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const { writeFileSync } = require('fs')

console.log(`
  To set up this project you need to provide your Space ID
  and the belonging API access tokens.

  You can find all the needed information in your Contentful space under:

  ${chalk.yellow(
    `app.contentful.com ${chalk.red('->')} Space Settings ${chalk.red(
      '->'
    )} API keys`
  )}

  The ${chalk.green('Content Management API Token')}
    will be used to import and write data to your space.

  The ${chalk.green('Content Delivery API Token')}
    will be used to ship published production-ready content in your Gatsby app.

  The ${chalk.green('Content Preview API Token')}
    will be used to show not published data in your development environment.

  Ready? Let's do it! 🎉
`)

const questions = [
  {
    name: 'spaceId',
    message: 'Your Space ID',
    validate: input =>
      /^[a-z0-9]{12}$/.test(input) ||
      'Space ID must be 12 lowercase characters',
  },
  {
    name: 'managementToken',
    message: 'Your Content Management API access token',
  },
  {
    name: 'accessToken',
    message: 'Your Content Delivery API access token',
  },
  {
    name: 'previewToken',
    message: 'Your Content Preview API access token',
  },
]

inquirer
  .prompt(questions)
  .then(({ spaceId, managementToken, accessToken, previewToken }) => {
    console.log('Writing config file...')
    const configFilePath = path.resolve(__dirname, '..', '.contentful.json')
    writeFileSync(
      configFilePath,
      JSON.stringify(
        {
          development: {
            spaceId,
            accessToken: previewToken,
          },
          production: {
            spaceId,
            accessToken,
          },
        },
        null,
        2
      )
    )
    console.log(`Config file ${chalk.yellow(configFilePath)} written`)

    return { spaceId, managementToken }
  })
  .catch(error => console.error(error))
