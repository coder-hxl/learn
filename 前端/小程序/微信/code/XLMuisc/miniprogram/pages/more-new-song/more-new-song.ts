import { newSongStore } from '../../stores/newSongStore'

Page({
  data: {
    newSongs: []
  },

  onLoad() {
    const newSongs = newSongStore.state.newSongs
    this.setData({ newSongs })
    // newSongStore.onState('newSongs', (value: any) => {
    //   console.log(value)
    //   this.setData({ newSongs: value })
    // })
  }
})
