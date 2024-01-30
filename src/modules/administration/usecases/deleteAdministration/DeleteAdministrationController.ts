import { Response, Request } from "express";
import { DeleteAdministrationUseCase } from "./DeleteAdministrationUseCase";
import { AppError } from "../../../../error/AppError";

class DeleteAdministrationController {
    constructor(private deleteAdministrationUseCase: DeleteAdministrationUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } = req.currenUser

        if (!Number(id)) 
            new AppError("Administration id does not exist", 400);
            
        const Administrations =  await this.deleteAdministrationUseCase.execute(Number(id), userId)

        return res.status(200).json(Administrations)
    }
}

export {  DeleteAdministrationController }