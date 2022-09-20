import xlStore from 'xl-store'
import { getNewSong } from '../services/music'

export const newStore = xlStore({
  state: {
    newSongs: []
  },
  actions: {
    async getNewSongs() {
      const res = await getNewSong(100)
      this.newSongs = res.result
    }
  }
})
