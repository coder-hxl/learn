import XLStore from './index'
import { getNewSong } from '../services/music'

export const newSongStore = new XLStore({
  state: {
    newSongs: []
  },
  actions: {
    async getNewSongs(ctx: any) {
      const res = await getNewSong(100)
      ctx.state.newSongs = res.result
    }
  }
})
