import { Response, Request } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!Number(id)) 
            throw new Error("User id does not exist");
            
        const users =  await this.deleteUserUseCase.execute(Number(id))

        return res.status(200).json(users)
    }
}

export {  DeleteUserController }