import { Response, Request } from "express";
import { UpdateAdministrationUseCase } from "./UpdateAdministrationUseCase";

class UpdateAdministrationController {
    constructor(private updateAdministrationUseCase: UpdateAdministrationUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId: adminId } = req.currenUser
        const { email,name} = req.body


        //Falta validar com YUP

        const Administrations =  await this.updateAdministrationUseCase.execute({ 
            adminId,
            email,
            id: Number(id),
            name})

        return res.status(200).json(Administrations)
    }
}

export {  UpdateAdministrationController }