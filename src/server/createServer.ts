import express from 'express'
import createRouter from '../api/routes/createRouter'

export default function createServer(port: number) {
	const server = express()
	const router = createRouter()

	server.use(express.json())
	server.use(router)
        
	server.listen(
		port, 
		() => console.log(`🔥 Server is running on port ${port}`)
	)    
}