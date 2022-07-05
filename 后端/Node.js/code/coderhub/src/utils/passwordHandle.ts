import crypto from 'node:crypto'

const md5Password = (password: string) => {
  const hash = crypto.createHash('md5')
  const result = hash.update(password).digest('hex')
  return result
}

export default md5Password
