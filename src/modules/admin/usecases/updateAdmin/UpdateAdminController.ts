import { Response, Request } from "express";
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";
import { hash } from "bcryptjs";

class UpdateAdminController {
    constructor(private updateAdminUseCase: UpdateAdminUseCase) { }

    async handle(req: Request, res: Response) {
        const { userId:id } = req.currenUser
        const { email,firstName,lastName,password} = req.body
        // const { bornDate, email, firstName, surName, img, municipioId, passwordHash } = req.body

        //Falta validar com YUP
        let passwordHash=''
        if (password) {
             passwordHash = await hash(password, 8)
        }

        const Admins =  await this.updateAdminUseCase.execute({ email,firstName,id,lastName,passwordHash})

        return res.status(200).json(Admins)
    }
}

export {  UpdateAdminController }