import Task from '@/entities/Task'
import IRepository from '@/domain/repositories/IRepository'
import IDeleteTaskUseCase from '@/app/contracts/useCases/task/IDeleteTaskUseCase'
import { inject, injectable } from 'inversify'

@injectable()
export default class DeleteTaskUseCase implements IDeleteTaskUseCase {

	constructor (
       @inject('ITaskRepository') private readonly _taskRepository: IRepository<Task>
	) {}

	async execute(id: string): Promise<void> {
		return await this._taskRepository.delete(id)
	}
}