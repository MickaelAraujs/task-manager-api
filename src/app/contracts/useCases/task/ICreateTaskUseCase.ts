import Task from '../../../../domain/entities/Task'

export default interface ICreateTaskUseCase {
    execute(title: string, description: string | null): Promise<Task>
}