module.exports = Behavior({
  data: {
    count: 100
  },
  methods: {
    increment() {
      this.setData({
        count: this.data.count + 1
      })
    },
    decrement() {
      this.setData({
        count: this.data.count - 1
      })
    }
  }
})
