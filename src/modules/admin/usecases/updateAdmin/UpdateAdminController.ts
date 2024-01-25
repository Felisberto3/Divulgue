import { Response, Request } from "express";
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";
import { hash } from "bcryptjs";
import { schema } from "../../../validation";

class UpdateAdminController {
    constructor(private updateAdminUseCase: UpdateAdminUseCase) { }

    async handle(req: Request, res: Response) {
        const { userId:id } = req.currenUser
        const { email,firstName,lastName,password} = req.body
        // const { bornDate, email, firstName, surName, img, municipioId, passwordHash } = req.body

        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }
        let passwordHash=''
        if (password) {
             passwordHash = await hash(password, 8)
        }

        const Admins =  await this.updateAdminUseCase.execute({ email,firstName,id,lastName,passwordHash})

        return res.status(200).json(Admins)
    }
}

export {  UpdateAdminController }