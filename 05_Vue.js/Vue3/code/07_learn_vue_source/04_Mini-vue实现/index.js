function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector)
      let isMount = false
      let oldVNode = null

      watchEffect(() => {
        if (!isMount) {
          oldVNode = rootComponent.render()
          mount(oldVNode, container)
          isMount = true
        } else {
          const newVNode = rootComponent.render()
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    }
  }
}