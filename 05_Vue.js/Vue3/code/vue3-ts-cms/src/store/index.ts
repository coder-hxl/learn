import { createPinia } from 'pinia'

import { useLoginStore } from './login/login'
import { useListStore } from './main/list/list'
import { useDepartmentsStore } from './main/departments/departments'
import { useRoleStore } from './main/role/role'

const store = createPinia()

export function setupStore() {
  useLoginStore().loadLocalLogin()
  useDepartmentsStore().getEntireDepartments()
  useRoleStore().getEntireRole()
}

export default store
export { useLoginStore, useListStore }
