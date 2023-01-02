import { Response, Request } from 'express'

export default interface IController {
    create(request: Request, response: Response): Promise<unknown>
    getAll(request: Request, response: Response): Promise<unknown>
    get(request: Request, response: Response): Promise<unknown>
    // update(request: Request, response: Response): Promise<void>
    // delete(request: Request, response: Response): Promise<void>
}