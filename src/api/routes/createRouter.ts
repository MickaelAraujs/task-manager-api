import { Router } from 'express'
import injectDependencies from '../../data/dependencyInjection/injectDependencies'
import createTaskRoutes from './task/task.routes'

export default function createRouter() {
	const router = Router()
	
	const controllers = injectDependencies()

	createTaskRoutes(router, controllers.taskController)

	return router
}