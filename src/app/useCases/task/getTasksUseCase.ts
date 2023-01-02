import Task from '../../../domain/entities/Task'
import IRepository from '../../../domain/repositories/IRepository'
import IGetTasksUseCase from '../../contracts/useCases/task/IGetTasksUseCase'

export default class GetTasksUseCase implements IGetTasksUseCase {

	constructor(private readonly _taskRepository: IRepository<Task>) {}

	async execute(): Promise<Task[]> {
		return this._taskRepository.getAll()
	}
} 