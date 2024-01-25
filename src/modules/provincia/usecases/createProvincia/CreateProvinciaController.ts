import { Request,Response } from "express";
import { CreateProvinciaUseCase } from "./CreateProvinciaUseCase";
import * as Yup from'yup'

class CreateProvinciaController {
    constructor(private createProvinciaUseCase: CreateProvinciaUseCase) { }

    async handle(req:Request, res:Response) {
        const { name  } = req.body
        const { userId  } = req.currenUser
        
        const schema = Yup.object().shape({
            name: Yup.string().required(),
        })

       
        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }

        const newProvincia = await this.createProvinciaUseCase.execute(name, userId)

        return res.status(201).json(newProvincia)
    }
}

export { CreateProvinciaController }