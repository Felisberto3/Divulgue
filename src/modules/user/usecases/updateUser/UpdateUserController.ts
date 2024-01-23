import { Response, Request } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { hash } from "bcryptjs";

class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { userId:id } = req.currenUser
        const { bornDate, email, firstName, surName, img, municipioId, password } = req.body

        //Falta validar com YUP
        let passwordHash = ''
        if (password) {
             passwordHash = await hash(password, 8)
        }

        const users =  await this.updateUserUseCase.execute({ id, bornDate, email, firstName, surName, img, municipioId, passwordHash})

        return res.status(200).json(users)
    }
}

export {  UpdateUserController }