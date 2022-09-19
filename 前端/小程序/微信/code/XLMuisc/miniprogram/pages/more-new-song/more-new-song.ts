import { newSongStore } from '../../stores/newSongStore'

Page({
  data: {
    newSongs: []
  },

  onLoad() {
    const newSongs = newSongStore.newSongs
    this.setData({ newSongs })
    newSongStore.watch('newSongs', this.fetchNewSongs)
  },

  onUnload() {
    newSongStore.deleteWatch('newSongs', this.fetchNewSongs)
  },

  fetchNewSongs(value: any) {
    this.setData({ newSongs: value })
  }
})
