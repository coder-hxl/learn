import newStore from '../../stores/newStore'
import playerStore from '../../stores/playerStore'

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
  },

  onSongItemTap(event: any) {
    const index = event.currentTarget.dataset.index
    playerStore.playSongIndex = index
    playerStore.playSongList = this.data.newSongs
  }
})
