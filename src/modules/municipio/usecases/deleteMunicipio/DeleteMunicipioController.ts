import { Response, Request } from "express";
import { DeleteMunicipioUseCase } from "./DeleteMunicipioUseCase";

class DeleteMunicipioController {
    constructor(private deleteMunicipioUseCase: DeleteMunicipioUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!Number(id)) 
            throw new Error("Municipio id does not exist");
            
        const Municipios =  await this.deleteMunicipioUseCase.execute(Number(id))

        return res.status(200).json(Municipios)
    }
}

export {  DeleteMunicipioController }