const types = require('./constants')

function changeNameAction(name) {
  return { type: types.CHANGE_NAME, name }
}

function addNumberAction(num) {
  return { type: types.ADD_NUMBER, num }
}

module.exports = {
  changeNameAction,
  addNumberAction
}
