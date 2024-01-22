import { Request,Response } from "express";
import { GetAdminUseCase } from "./GetAdminUseCase";

class GetAdminController {
    constructor(private getAdminitrationsUseCase: GetAdminUseCase) { }

    async handle(req:Request, res:Response) {
        const { id  } = req.params

        const newAdminitrations = await this.getAdminitrationsUseCase.execute(Number(id))

        return res.status(201).json(newAdminitrations)
    }
}

export { GetAdminController }
