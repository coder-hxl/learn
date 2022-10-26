import * as actionTypes from './constants'

const initState = {
  counter: 0
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }

    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }

    default:
      return state
  }
}

export default reducer
