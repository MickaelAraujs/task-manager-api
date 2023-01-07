import Task from '@/entities/Task'

export default interface IGetTasksUseCase {
    execute(): Promise<Task[]>
}