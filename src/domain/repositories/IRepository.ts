export default interface IRepository<T> {
    create(data: T): Promise<T>
    getAll(): Promise<T[]> 
    getById(id: string): Promise<T>
}