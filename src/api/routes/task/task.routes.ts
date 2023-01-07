import { Router, Request, Response } from 'express'
import TaskController from '@/controllers/task/TaskController'

export default class TaskRoutes {
	static createRoutes(router: Router) {
		const path = '/tasks'

		const taskController = new TaskController()
	
		router.post(path, (req: Request, res: Response) => taskController.create(req, res))
		router.get(path, (req: Request, res: Response) => taskController.getAll(req, res))  
		router.get(path + '/:id', (req: Request, res: Response) => taskController.get(req, res)) 
		router.delete(path + '/:id', (req: Request, res: Response) => taskController.delete(req, res))   
	}
}


