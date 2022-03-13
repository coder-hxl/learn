import { createPinia } from 'pinia'

import { useLoginStore } from './login/login'
import { useSystemStore } from './main/system/system'

const store = createPinia()

export function setupStore() {
  useLoginStore().loadLocalLogin()
}

export default store
export { useLoginStore, useSystemStore }
