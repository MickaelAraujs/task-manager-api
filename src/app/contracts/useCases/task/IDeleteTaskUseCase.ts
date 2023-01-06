export default interface IDeleteTaskUseCase {
    execute(id: string): Promise<void>
}