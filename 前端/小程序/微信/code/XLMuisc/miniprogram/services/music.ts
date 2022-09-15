import { xlRequest } from './index'

export function getBanner(type = 0) {
  return xlRequest.get({
    url: '/banner',
    data: { type }
  })
}
