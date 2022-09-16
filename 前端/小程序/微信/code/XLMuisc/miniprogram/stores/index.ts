interface IXLStoreArg {
  state?: any
  actions?: any
}

function proxyState(state: any, callbackQueue: any) {
  return new Proxy(state, {
    set(target, prop, value) {
      target[prop] = value

      if (callbackQueue[prop]) {
        for (const item of callbackQueue[prop]) {
          item(value)
        }
      }

      return true
    }
  })
}

export default class XLStore {
  callbackQueue: any
  state: any
  actions: any

  constructor(arg: IXLStoreArg) {
    this.callbackQueue = {}

    const { state, actions } = arg
    this.state = proxyState(state, this.callbackQueue)
    this.actions = actions
  }

  onState(key: string, callback: Function) {
    if (!this.callbackQueue[key]) {
      this.callbackQueue[key] = []
    }

    this.callbackQueue[key].push(callback)
  }

  dispatch(key: string) {
    return this.actions[key](this)
  }
}
