import xlStore from 'xl-store'
import { getNewSong } from '../services/music'

const newStore = xlStore({
  state: {
    newSongs: []
  },
  actions: {
    async fetchNewSongsActions() {
      const res = await getNewSong(100)
      this.newSongs = res.result
    }
  }
})

export default newStore
