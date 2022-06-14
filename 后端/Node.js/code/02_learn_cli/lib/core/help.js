const program = require('commander')

function helpOptions() {
  // 添加options
  program.option('-c --coderhxl', 'a coderhxl cli')
  program.option('-d --dest <dest>', '例如: -d /src/components')

  program.on('--help', () => {
    console.log('')
    console.log('Option:')
    console.log('  option help~')
  })
}

module.exports = helpOptions
