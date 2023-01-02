import dotenv from 'dotenv'
import createServer from './server/createServer'

dotenv.config()

const port = Number(process.env.PORT) || 3000

createServer(port)