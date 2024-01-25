import { Request,Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";
import  jwt  from "jsonwebtoken";
import { schema } from "../../../validation";

class CreateAdminController {
    constructor(private createAdminUseCase: CreateAdminUseCase) { }

    async handle(req:Request, res:Response) {
        const {  email,firstName,lastName,password } = req.body
        
        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }
        const { userId } = req.currenUser

        const newAdmin = await this.createAdminUseCase.execute({ email,firstName,lastName,password}, userId)

        const token = jwt.sign(
            { 
                email,
                userId:newAdmin.id
            }, process.env.KEY!,
            { expiresIn: '10d'}
            )
        return res.status(201).json({
            newAdmin,
            token
        })
    }
}

export { CreateAdminController }