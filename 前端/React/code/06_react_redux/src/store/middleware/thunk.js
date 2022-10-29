// 对 dispatch 进行拦截
export default function thunk(store) {
  const next = store.dispatch

  function thunkAndDispatch(action) {
    if (typeof action === 'function') {
      action(thunkAndDispatch)
    } else {
      next(action)
    }
  }

  store.dispatch = thunkAndDispatch
}
