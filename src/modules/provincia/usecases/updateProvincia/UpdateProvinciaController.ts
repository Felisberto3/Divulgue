import { Response, Request } from "express";
import { UpdateProvinciaUseCase } from "./UpdateProvinciaUseCase";


class UpdateProvinciaController {
    constructor(private updateProvinciaUseCase: UpdateProvinciaUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } = req.currenUser
        //so o admin pode update provincia
        const { name } = req.body

        //Falta validar com YUP

        const Provincias =  await this.updateProvinciaUseCase.execute(Number(id),name)

        return res.status(200).json(Provincias)
    }
}

export {  UpdateProvinciaController }