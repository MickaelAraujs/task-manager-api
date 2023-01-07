import Task from '@/entities/Task'
import IRepository from '@/domain/repositories/IRepository'
import IGetTasksUseCase from '@/app/contracts/useCases/task/IGetTasksUseCase'
import { inject, injectable } from 'inversify'

@injectable()
export default class GetTasksUseCase implements IGetTasksUseCase {

	constructor(
		@inject('ITaskRepository') private readonly _taskRepository: IRepository<Task>
	) {}

	async execute(): Promise<Task[]> {
		return this._taskRepository.getAll()
	}
} 