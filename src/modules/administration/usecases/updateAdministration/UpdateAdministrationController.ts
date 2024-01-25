import { Response, Request } from "express";
import { UpdateAdministrationUseCase } from "./UpdateAdministrationUseCase";
import { schema } from "../../../validation";

class UpdateAdministrationController {
    constructor(private updateAdministrationUseCase: UpdateAdministrationUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId: adminId } = req.currenUser
        const { email,name} = req.body


        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }

        const Administrations =  await this.updateAdministrationUseCase.execute({ 
            adminId,
            email,
            id: Number(id),
            name})

        return res.status(200).json(Administrations)
    }
}

export {  UpdateAdministrationController }