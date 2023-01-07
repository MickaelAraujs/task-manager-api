import Task from '@/entities/Task'
import IRepository from '@/domain/repositories/IRepository'
import ICreateTaskUseCase from '@/app/contracts/useCases/task/ICreateTaskUseCase'

export default class CreateTaskUseCase implements ICreateTaskUseCase {

	constructor(private readonly _taskRepository: IRepository<Task>) {}

	async execute(title: string, description: string | null): Promise<Task> {
		const id = 'iorgjierbjgi'
		const finished = false
		const finishedAt = null
		const createdAt = new Date()
		const updatedAt = new Date()
		const deletedAt = null

		const task = new Task(
			id, 
			title, 
			description, 
			finished, 
			finishedAt, 
			createdAt, 
			updatedAt, 
			deletedAt
		)
		
		return this._taskRepository.create(task)
	}
} 