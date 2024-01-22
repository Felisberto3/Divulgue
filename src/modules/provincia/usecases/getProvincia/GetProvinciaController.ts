import { Request,Response } from "express";
import { GetProvinciaUseCase } from "./GetProvinciaUseCase";

class GetProvinciaController {
    constructor(private getProvinciaUseCase: GetProvinciaUseCase) { }

    async handle(req:Request, res:Response) {
        const { id  } = req.params

        const newProvincia = await this.getProvinciaUseCase.execute(Number(id))

        return res.status(201).json(newProvincia)
    }
}

export { GetProvinciaController } 
