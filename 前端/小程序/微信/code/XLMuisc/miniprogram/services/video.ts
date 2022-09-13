import { xlRequest } from './index'

export function getTopMV(offset = 0, limit = 20) {
  return xlRequest.get({
    url: '/top/mv',
    data: {
      offset,
      limit
    }
  })
}
