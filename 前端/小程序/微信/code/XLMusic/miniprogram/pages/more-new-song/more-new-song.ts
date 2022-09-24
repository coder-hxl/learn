import newStore from '../../stores/newStore'

Page({
  data: {
    newSongs: []
  },

  onLoad() {
    newStore.fetchNewSongsActions(100)
    newStore.watch('newSongs', this.handleNewSongs)
  },

  onUnload() {
    newStore.deleteWatch('newSongs', this.handleNewSongs)
  },

  handleNewSongs(value: any) {
    this.setData({ newSongs: value })
  }
})
