import { Request,Response } from "express";
import { GetAdministrationsUseCase } from "./GetAdministrationUseCase";

class GetAdminitrationsController {
    constructor(private getAdminitrationsUseCase: GetAdministrationsUseCase) { }

    async handle(req:Request, res:Response) {
        const { id  } = req.params

        const newAdminitrations = await this.getAdminitrationsUseCase.execute(Number(id))

        return res.status(201).json(newAdminitrations)
    }
}

export { GetAdminitrationsController }
