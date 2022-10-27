import * as actionTypes from './constants'

export function addNumberAction(num) {
  return { type: actionTypes.ADD_NUMBER, num }
}

export function subNumberAction(num) {
  return { type: actionTypes.SUB_NUMBER, num }
}
