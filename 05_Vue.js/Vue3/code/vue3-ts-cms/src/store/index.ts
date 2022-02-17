import { defineStore } from 'pinia'

const useStore = defineStore('main', {
  state: () => {
    return {
      name: '浮幻'
    }
  }
})

export { useStore }
