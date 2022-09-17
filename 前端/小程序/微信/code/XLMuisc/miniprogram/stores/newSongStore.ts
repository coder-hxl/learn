import xlStore from './index'
import { getNewSong } from '../services/music'

export const newSongStore = xlStore({
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
