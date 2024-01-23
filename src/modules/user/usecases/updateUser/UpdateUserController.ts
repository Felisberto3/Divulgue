import { Response, Request } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { userId:id } = req.currenUser
        const { bornDate, email, firstName, surName, img, municipioId, passwordHash } = req.body

        //Falta validar com YUP

        const users =  await this.updateUserUseCase.execute({ id, bornDate, email, firstName, surName, img, municipioId, passwordHash})

        return res.status(200).json(users)
    }
}

export {  UpdateUserController }