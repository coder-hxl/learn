Vue.createApp({
  template: '#my-app',
  data() {
    return {
      books: [
        {
          id: 1,
          names: '《算法导论》',
          date: '2006-9',
          price: 85.0,
          count: 1
        },
        {
          id: 2,
          names: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.0,
          count: 1
        },
        {
          id: 3,
          names: '《ES6入门》',
          date: '2006-9',
          price: 80.5,
          count: 1
        },
        {
          id: 4,
          names: '《JavaScript权威指南》',
          date: '2006-9',
          price: 128.0,
          count: 1
        }
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.books.reduce((pre, item) => pre + item.price * item.count, 0)
    }
    // Vue3不支持过滤器了，推荐两种方法：使用计算属性/使用全局的方法
    // filterBooks() {
    // 	return this.books.map(item => {
    // 		const newItem = Object.assign({}, item)
    // 		newItem.price = `¥${item.price}`
    // 		return newItem
    // 	})
    // }
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removerBook(index) {
      this.books.splice(index, 1)
    },
    formatPrice(price) {
      return `¥${price.toFixed(2)}`
    }
  }
}).mount('#app')
