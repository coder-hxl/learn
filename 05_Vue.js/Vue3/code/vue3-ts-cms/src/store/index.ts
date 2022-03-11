import { createPinia } from 'pinia'

import { useLoginStore, loadLocalLogin } from './login/login'

const store = createPinia()

export function setupStore() {
  loadLocalLogin()
}

export default store
export { useLoginStore }
