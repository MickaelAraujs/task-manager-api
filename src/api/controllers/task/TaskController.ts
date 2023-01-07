import { Response, Request } from 'express'
import { lazyInject } from '@/data/dependencyInjection'
import IController from '@/controllers/contracts/IController'
import ICreateTaskUseCase from '@/app/contracts/useCases/task/ICreateTaskUseCase'
import IGetTasksUseCase from '@/app/contracts/useCases/task/IGetTasksUseCase'
import IGetTaskUseCase from '@/app/contracts/useCases/task/IGetTaskUseCase'
import IDeleteTaskUseCase from '@/app/contracts/useCases/task/IDeleteTaskUseCase'

export default class TaskController implements IController {
	@lazyInject('ICreateTaskUseCase') private readonly _createTaskUseCase!: ICreateTaskUseCase
	@lazyInject('IGetTasksUseCase') private readonly _getTasksUseCase!: IGetTasksUseCase
	@lazyInject('IGetTaskUseCase') private readonly _getTaskUseCase!: IGetTaskUseCase
	@lazyInject('IDeleteTaskUseCase') private readonly _deleteTaskUseCase!: IDeleteTaskUseCase
	
	async create(request: Request, response: Response) {
		const { title, description, } = request.body 
		
		const task = await this._createTaskUseCase.execute(title, description)
		
		return response.status(200).json(task)
	}

	async getAll(_request: Request, response: Response) {
		const tasks = await this._getTasksUseCase.execute()

		return response.json(tasks) 
	}

	async get(request: Request, response: Response) {
		const { id } = request.params
		
		const task = await this._getTaskUseCase.execute(id)
		
		return response.status(200).json(task)
	}

	async delete(request: Request, response: Response) {
		const { id } = request.params

		await this._deleteTaskUseCase.execute(id)

		return response.status(200)
			.json({ success: true, message: 'Task deleted successfully' })
	}
}
