import newStore from '../../stores/newStore'

Page({
  data: {
    newSongs: []
  },

  onLoad() {
    const newSongs = newStore.newSongs
    this.setData({ newSongs })
    newStore.watch('newSongs', this.handleNewSongs)
  },

  onUnload() {
    newStore.deleteWatch('newSongs', this.handleNewSongs)
  },

  handleNewSongs(value: any) {
    this.setData({ newSongs: value })
  }
})
