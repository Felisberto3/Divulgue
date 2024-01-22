import { Request,Response } from "express";
import { CreateAdministrationUseCase } from "./CreateAdministrationUseCase";
import jwt from "jsonwebtoken";

class CreateAdministratuionController {
    constructor(private createAdministrationUseCase: CreateAdministrationUseCase) { }

    async handle(req:Request, res:Response) {
        const { adminId,email,name} = req.body

        const newAdministration = await this.createAdministrationUseCase.execute({ adminId,email,name})


        return res.status(201).json(newAdministration)
    }
}

export { CreateAdministratuionController }