import app from '@/app'
import '@/app/database'

import config from '@/app/config'

app.listen(config.APP_PORT, () => {
  console.log(`服务器在 ${config.APP_PORT} 端口启动成功~`)
})
