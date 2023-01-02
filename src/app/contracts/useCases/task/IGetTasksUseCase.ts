import Task from '../../../../domain/entities/Task'

export default interface IGetTasksUseCase {
    execute(): Promise<Task[]>
}