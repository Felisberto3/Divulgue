import { Request,Response } from "express";
import { CreateAdministrationUseCase } from "./CreateAdministrationUseCase";
import jwt from "jsonwebtoken";

class CreateAdministratuionController {
    constructor(private createAdministrationUseCase: CreateAdministrationUseCase) { }

    async handle(req:Request, res:Response) {
        const { adminId,email,name} = req.body

        const newAdmin = await this.createAdministrationUseCase.execute({ adminId,email,name})

        const token = jwt.sign({
            email,
            userId: newAdmin.id
        }, process.env.KEY!,
        { expiresIn: '10d' })

        return res.status(201).json({
            newAdmin,
            token
        })
    }
}

export { CreateAdministratuionController }