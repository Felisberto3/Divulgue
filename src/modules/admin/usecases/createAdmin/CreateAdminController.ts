import { Request,Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";
import  jwt  from "jsonwebtoken";

class CreateAdminController {
    constructor(private createAdminUseCase: CreateAdminUseCase) { }

    async handle(req:Request, res:Response) {
        const {  email,firstName,lastName,password } = req.body

        const newAdmin = await this.createAdminUseCase.execute({ email,firstName,lastName,password})

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