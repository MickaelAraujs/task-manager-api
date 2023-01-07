import Task from '@/entities/Task'
import IRepository from '@/domain/repositories/IRepository'
import IGetTaskUseCase from '@/app/contracts/useCases/task/IGetTaskUseCase'

export default class GetTaskUseCase implements IGetTaskUseCase {

	constructor(private readonly _taskRepository: IRepository<Task>) {}

	async execute(id: string): Promise<Task> {
		return this._taskRepository.getById(id)
	}
} 