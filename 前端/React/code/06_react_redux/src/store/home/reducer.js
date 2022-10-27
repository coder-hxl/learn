import * as actionTypes from './constants'

const initState = {
  banners: [],
  recommends: []
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: action.banners }

    case actionTypes.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }

    default:
      return state
  }
}

export default reducer
