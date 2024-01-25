import { Request,Response } from "express";
import { CreateAdministrationUseCase } from "./CreateAdministrationUseCase";
import jwt from "jsonwebtoken";
import { schema } from "../../../validation";

class CreateAdministratuionController {
    constructor(private createAdministrationUseCase: CreateAdministrationUseCase) { }

    async handle(req:Request, res:Response) {
        const { adminId,email,name} = req.body

        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }
        const newAdministration = await this.createAdministrationUseCase.execute({ adminId,email,name})


        return res.status(201).json(newAdministration)
    }
}

export { CreateAdministratuionController }