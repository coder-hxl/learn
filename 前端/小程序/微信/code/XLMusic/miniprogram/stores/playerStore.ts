import xlStore from 'xl-store'

const playerStore = xlStore({
  state: {
    playSongList: [],
    playSongIndex: null
  }
})

export default playerStore
