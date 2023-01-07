import Task from '@/entities/Task'
import IRepository from '@/domain/repositories/IRepository'
import IGetTaskUseCase from '@/app/contracts/useCases/task/IGetTaskUseCase'
import { inject, injectable } from 'inversify'

@injectable()
export default class GetTaskUseCase implements IGetTaskUseCase {

	constructor(
		@inject('ITaskRepository') private readonly _taskRepository: IRepository<Task>
	) {}

	async execute(id: string): Promise<Task> {
		return this._taskRepository.getById(id)
	}
} 