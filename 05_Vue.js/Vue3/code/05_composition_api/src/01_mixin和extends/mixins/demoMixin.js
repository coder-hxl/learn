export const demoMixin = {
  data() {
    return {
      message: 'Hello demoMixin'
    }
  },
  methods: {
    foo() {
      console.log('demoMixin foo');
    }
  },
  created() {
    console.log('demoMixin created');
  }
}