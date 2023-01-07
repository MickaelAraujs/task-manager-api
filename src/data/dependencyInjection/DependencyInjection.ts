//Repositories
import TaskMemoryRepository from '@/repositories/task/TaskMemoryRepository'

//Use cases
import CreateTaskUseCase from '@/useCases/task/createTaskUseCase'
import GetTasksUseCase from '@/useCases/task/getTasksUseCase'
import GetTaskUseCase from '@/useCases/task/getTaskUseCase'
import DeleteTaskUseCase from '@/useCases/task/deleteTaskUseCase'

//Controllers
import TaskController from '@/controllers/task/TaskController'

export default class DependencyInjection {
	inject() {
		const taskRepository = new TaskMemoryRepository()

		const createTaskUseCase = new CreateTaskUseCase(taskRepository)
		const getTasksUseCase = new GetTasksUseCase(taskRepository)
		const getTaskUseCase = new GetTaskUseCase(taskRepository)
		const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository)
		
		const taskController = new TaskController(
			createTaskUseCase,
			getTasksUseCase,
			getTaskUseCase,
			deleteTaskUseCase
		)
        
		return {
			taskController,
		}
	}
}