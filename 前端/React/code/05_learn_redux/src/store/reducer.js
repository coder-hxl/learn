const types = require('./constants')

const initialState = {
  name: 'hxl',
  counter: 0
}

// 纯函数 返回一个新的state
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_NAME:
      return { ...state, name: action.name }

    case types.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }

    default:
      return state
  }
}

module.exports = reducer
