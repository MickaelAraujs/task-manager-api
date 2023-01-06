import Task from '../../../domain/entities/Task'
import IRepository from '../../../domain/repositories/IRepository'

export default class TaskMemoryRepository implements IRepository<Task> {
	tasks: Task[] = []

	async create(task: Task): Promise<Task> {
		this.tasks.push(task)
		return new Promise((resolve) => resolve(task))
	}

	async getAll(): Promise<Task[]> {
		return new Promise((resolve) => resolve(this.tasks))
	}

	async getById(id: string): Promise<Task> {
		const task = this.tasks.find(task => task.id === id)

		if (!task) throw new Error('Invalid task')

		return new Promise((resolve) => resolve(task))
	}

	async delete(id: string): Promise<void> {
		this.tasks = this.tasks.filter(task => task.id !== id)

		return new Promise(resolve => resolve())
	}
}