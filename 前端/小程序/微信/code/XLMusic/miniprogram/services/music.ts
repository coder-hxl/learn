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

export function getRecommendSongMenu(limit = 6) {
  return xlRequest.get({
    url: '/personalized',
    data: { limit }
  })
}

export function getChoicenessSongMenu(cat = '全部', limit = 6) {
  return xlRequest.get({
    url: '/top/playlist/highquality',
    data: { cat, limit }
  })
}

export function getTopList() {
  return xlRequest.get({ url: '/toplist/detail' })
}
