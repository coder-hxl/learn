import { createPinia } from 'pinia'

import { useLoginStore } from './login/login'
import { useListStore } from './main/list/list'

const store = createPinia()

export function setupStore() {
  useLoginStore().loadLocalLogin()
}

export default store
export { useLoginStore, useListStore }
