import { createPinia } from 'pinia'

import { useLoginStore, loadLocalLogin } from './login/login'
import { useUserStore } from './user/user'

const store = createPinia()

export function setupStore() {
  loadLocalLogin()
}

export default store
export { useLoginStore, useUserStore }
