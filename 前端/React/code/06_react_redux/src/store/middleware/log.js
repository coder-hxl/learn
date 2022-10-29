export default function log(store) {
  const next = store.dispatch

  function logAndDispatch(action) {
    console.log('diaptch action: ', action)
    next(action)
    console.log('dispatch res: ', store.getState())
  }

  store.dispatch = logAndDispatch
}
