import { Response, Request } from "express";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

class DeleteAdminController {
    constructor(private deleteAdminUseCase: DeleteAdminUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!Number(id)) 
            throw new Error("Admin id does not exist");
            
        const Admins =  await this.deleteAdminUseCase.execute(Number(id))

        return res.status(200).json(Admins)
    }
}

export {  DeleteAdminController }