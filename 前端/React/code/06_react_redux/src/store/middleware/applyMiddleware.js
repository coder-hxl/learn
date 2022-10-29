export default function applyMiddleware(store, ...fns) {
  fns.forEach((fn) => fn(store))
}
