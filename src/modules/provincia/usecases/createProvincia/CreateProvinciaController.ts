import { Request,Response } from "express";
import { CreateProvinciaUseCase } from "./CreateProvinciaUseCase";

class CreateProvinciaController {
    constructor(private createProvinciaUseCase: CreateProvinciaUseCase) { }

    async handle(req:Request, res:Response) {
        const { name  } = req.body

        const newProvincia = await this.createProvinciaUseCase.execute(name)

        return res.status(201).json(newProvincia)
    }
}

export { CreateProvinciaController }