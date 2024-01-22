import { Response, Request } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
    constructor(private getUserUseCase: GetUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        const users =  await this.getUserUseCase.execute(Number(id))

        return res.status(200).json(users)
    }
}

export {  GetUserController }