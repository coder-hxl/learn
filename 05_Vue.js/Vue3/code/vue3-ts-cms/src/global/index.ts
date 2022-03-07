import { App } from 'vue'

import registerElement from './register-element'

export function globalRegisterApp(app: App) {
  app.use(registerElement)
}
