//Repositories
import TaskMemoryRepository from '../repositories/task/TaskMemoryRepository'

//Use cases
import CreateTaskUseCase from '../../app/useCases/task/createTaskUseCase'
import GetTasksUseCase from '../../app/useCases/task/getTasksUseCase'
import GetTaskUseCase from '../../app/useCases/task/getTaskUseCase'

//Controllers
import TaskController from '../../api/controllers/task/TaskController'
import DeleteTaskUseCase from '../../app/useCases/task/deleteTaskUseCase'

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