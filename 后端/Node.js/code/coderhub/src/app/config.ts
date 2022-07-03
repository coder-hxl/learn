import dotenv from 'dotenv'

dotenv.config()

const { APP_PORT } = process.env

export default { APP_PORT }
