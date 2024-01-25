import { Response, Request } from "express";
import { UpdateMunicipioUseCase } from "./UpdateUserUseCase";
import { schema } from "../../../validation";

class UpdateMunicipioController {
    constructor(private updateMunicipioUseCase: UpdateMunicipioUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId: adminId } = req.currenUser
        const { administrationId,name,provinciaId } = req.body

        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }

        const Municipios =  await this.updateMunicipioUseCase.execute({ adminId,id:Number(id), administrationId,name,provinciaId})

        return res.status(200).json(Municipios)
    }
}

export {  UpdateMunicipioController }