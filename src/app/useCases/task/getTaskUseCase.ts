import Task from '../../../domain/entities/Task'
import IRepository from '../../../domain/repositories/IRepository'
import IGetTaskUseCase from '../../contracts/useCases/task/IGetTaskUseCase'

export default class GetTaskUseCase implements IGetTaskUseCase {

	constructor(private readonly _taskRepository: IRepository<Task>) {}

	async execute(id: string): Promise<Task> {
		return this._taskRepository.getById(id)
	}
} 