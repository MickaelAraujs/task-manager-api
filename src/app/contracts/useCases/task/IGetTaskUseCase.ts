import Task from '@/entities/Task'

export default interface IGetTaskUseCase {
    execute(id: string): Promise<Task>
}