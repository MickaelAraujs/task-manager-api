import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'

import Task from '@/domain/entities/Task'

//Repositories
import IRepository from '@/domain/repositories/IRepository'
import TaskMemoryRepository from '@/repositories/task/TaskMemoryRepository'

//Use cases
import CreateTaskUseCase from '@/useCases/task/createTaskUseCase'
import GetTasksUseCase from '@/useCases/task/getTasksUseCase'
import GetTaskUseCase from '@/useCases/task/getTaskUseCase'
import DeleteTaskUseCase from '@/useCases/task/deleteTaskUseCase'

import ICreateTaskUseCase from '@/app/contracts/useCases/task/ICreateTaskUseCase'
import IGetTasksUseCase from '@/app/contracts/useCases/task/IGetTasksUseCase'
import IGetTaskUseCase from '@/app/contracts/useCases/task/IGetTaskUseCase'
import IDeleteTaskUseCase from '@/app/contracts/useCases/task/IDeleteTaskUseCase'

const container = new Container()

//Bind repositories
container.bind<IRepository<Task>>('ITaskRepository')
	.to(TaskMemoryRepository)
	.inSingletonScope()

//Bind use Cases
container.bind<ICreateTaskUseCase>('ICreateTaskUseCase')
	.to(CreateTaskUseCase)
	.inSingletonScope()

container.bind<IGetTasksUseCase>('IGetTasksUseCase')
	.to(GetTasksUseCase)
	.inSingletonScope()

container.bind<IGetTaskUseCase>('IGetTaskUseCase')
	.to(GetTaskUseCase)
	.inSingletonScope()

container.bind<IDeleteTaskUseCase>('IDeleteTaskUseCase')
	.to(DeleteTaskUseCase)
	.inSingletonScope()

const { lazyInject } = getDecorators(container)

export { container, lazyInject }

