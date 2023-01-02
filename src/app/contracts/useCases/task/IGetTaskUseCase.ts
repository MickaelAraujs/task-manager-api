import Task from '../../../../domain/entities/Task'

export default interface IGetTaskUseCase {
    execute(id: string): Promise<Task>
}