import xlStore from 'xl-store'

import { getChoicenessSongMenu, getRecommendSongMenu } from '../services/music'

const songMenuStore = xlStore({
  state: {
    recommendSongMenu: [],
    choicenessSongMenu: []
  },
  actions: {
    async fetchRecommendSongMenuAction() {
      const res = await getRecommendSongMenu(30)
      this.recommendSongMenu = res.result
    },
    async fetchChoicenessSongMenuAction() {
      const res = await getChoicenessSongMenu('全部', 30)
      this.choicenessSongMenu = res.playlists
    }
  }
})

export default songMenuStore
