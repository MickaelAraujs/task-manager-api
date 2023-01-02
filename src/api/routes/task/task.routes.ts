import { Router, Request, Response } from 'express'
import TaskController from '../../controllers/task/TaskController'

function createTaskRoutes(router: Router, path: string, taskController: TaskController) {
	router.post(path, (req: Request, res: Response) => taskController.create(req, res))
	router.get(path, (req: Request, res: Response) => taskController.getAll(req, res))  
	router.get(path + '/:id', (req: Request, res: Response) => taskController.get(req, res))    
}

export default createTaskRoutes
