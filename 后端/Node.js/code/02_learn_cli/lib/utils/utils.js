const path = require('path')
const fs = require('fs')

const ejs = require('ejs')

const compile = (template, data) => {
  const templatePosition = `../templates/${template}`
  const templatePath = path.resolve(__dirname, templatePosition)

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, res) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }

      resolve(res)
    })
  })
}

const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content)
}

module.exports = {
  compile,
  writeToFile
}
