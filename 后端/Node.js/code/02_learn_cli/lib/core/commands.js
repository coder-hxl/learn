const program = require('commander')

const { createProjectActive, addComponentAction } = require('./actives')

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectActive)

  program
    .command('addcpn <name>')
    .description('例如: hxl addcpn navBar')
    .action((name) => {
      addComponentAction(name, program.opts().dest || 'src/components')
    })
}

module.exports = createCommands
