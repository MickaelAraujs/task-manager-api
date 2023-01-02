export default interface ITaskDto {
    id: string,
    title: string, 
    description: string | null,
    finished: boolean,
    finishedAt: Date | null,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
}