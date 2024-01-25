import { schema } from "../../../validation";
import { CreateMunicipioUseCase } from "./CreateMunicipioUseCase";
import { Request,Response } from "express";

class CreateMunicipioController {
    constructor(private createMunicipioUseCase: CreateMunicipioUseCase) { }

    async handle(req:Request, res:Response) {
        const { name,administration, provincia  } = req.body

        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }

        const newMunicipio = await this.createMunicipioUseCase.execute({administration, name, provincia})

        return res.status(201).json(newMunicipio)
    }
}

export { CreateMunicipioController }