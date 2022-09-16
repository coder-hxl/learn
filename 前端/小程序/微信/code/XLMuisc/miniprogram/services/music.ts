import { xlRequest } from './index'

export function getBanner(type = 0) {
  return xlRequest.get({
    url: '/banner',
    data: { type }
  })
}

export function getNewSong(limit: number) {
  return xlRequest.get({
    url: '/personalized/newsong',
    data: { limit }
  })
}
