import multer from '@koa/multer'

import { AVATAR_PATH } from '@/constants/file-path'

const avatarUpload = multer({ dest: AVATAR_PATH })

const avatarHandler = avatarUpload.single('avatar')

export { avatarHandler }
