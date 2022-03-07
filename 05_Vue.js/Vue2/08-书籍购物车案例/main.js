const app = new Vue({
  el: '#app',
  data: {
    boots: [{
      id: 1,
      names: '《算法导论》',
      date: '2006-9',
      price: 85.00,
      count: 1,
    }, {
      id: 2,
      names: '《UNIX编程艺术》',
      date: '2006-2',
      price: 59.00,
      count: 1,
    }, {
      id: 3,
      names: '《ES6入门》',
      date: '2006-9',
      price: 80.50,
      count: 1,
    }, {
      id: 4,
      names: '《JavaScript权威指南》',
      date: '2006-9',
      price: 128.00,
      count: 1,
    }],
  },
  methods: {
    increment(index) {
      this.boots[index].count++;
    },
    decrement(index) {
      this.boots[index].count--;
    },
    removeClick(index) {
      this.boots.splice(index, 1)
    },
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0
      // for (const v of this.boots) {
      //   totalPrice += v.price * v.count
      // }
      // return totalPrice

      // reduce
      return this.boots.reduce((pre, v) => pre + v.price * v.count , 0)
    }
  },
  filters: {
    showPrice(price) {
      return `￥${price.toFixed(2)}`
    }
  },
})