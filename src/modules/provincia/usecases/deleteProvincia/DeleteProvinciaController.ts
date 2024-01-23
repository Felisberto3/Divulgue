import { Response, Request } from "express";
import { DeleteProvinciaUseCase } from "./DeleteProvinciaUseCase";

class DeleteProvinciaController {
    constructor(private deleteProvinciaUseCase: DeleteProvinciaUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } =req.currenUser

        if (!Number(id)) 
            throw new Error("Provincia id does not exist");
            
        const Provincias =  await this.deleteProvinciaUseCase.execute(Number(id),userId)

        return res.status(200).json(Provincias)
    }
}

export {  DeleteProvinciaController }