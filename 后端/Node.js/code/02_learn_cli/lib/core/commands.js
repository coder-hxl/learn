const program = require('commander')

const {
  createProjectActive,
  addComponentAction,
  addPageAndRouteAction
} = require('./actives')

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder, 例如: hxl create project')
    .action(createProjectActive)

  program
    .command('addcpn <name>')
    .description('add component, 例如: hxl addcpn Home [-d src/components]')
    .action((name) => {
      addComponentAction(name, program.opts().dest || 'src/components')
    })

  program
    .command('addpage <name>')
    .description('add page and route, 例如: hxl addpage Home [-d src/pages]')
    .action((name) => {
      addPageAndRouteAction(name, program.opts().dest || 'src/pages')
    })
}

module.exports = createCommands
