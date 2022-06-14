const program = require('commander')

const { createProjectActive } = require('./actives')

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectActive)
}

module.exports = createCommands
