import { createPinia } from 'pinia'

import { useLoginStore } from './login/login'
import { useUserStore } from './user/user'

const store = createPinia()

export default store
export { useLoginStore, useUserStore }
