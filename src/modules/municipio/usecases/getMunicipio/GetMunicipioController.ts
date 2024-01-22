import { GetMunicipioUseCase } from "./GetMunicipioUseCase";
import { Request,Response } from "express";

class GetMunicipioController {
    constructor(private getMunicipioUseCase: GetMunicipioUseCase) { }

    async handle(req:Request, res:Response) {
        const { name  } = req.body

        const newMunicipio = await this.getMunicipioUseCase.execute(name)

        return res.status(201).json(newMunicipio)
    }
}

export { GetMunicipioController }