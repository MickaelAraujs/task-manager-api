import { Router } from 'express'
import TaskRoutes from './task/task.routes'

export default function createRouter() {
	const router = Router()

	TaskRoutes.createRoutes(router)

	return router
}