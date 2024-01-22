import { Response, Request } from "express";
import { DeleteAdministrationUseCase } from "./DeleteAdministrationUseCase";

class DeleteAdministrationController {
    constructor(private deleteAdministrationUseCase: DeleteAdministrationUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!Number(id)) 
            throw new Error("Administration id does not exist");
            
        const Administrations =  await this.deleteAdministrationUseCase.execute(Number(id))

        return res.status(200).json(Administrations)
    }
}

export {  DeleteAdministrationController }