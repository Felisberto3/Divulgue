import { Request, Response } from "express"
import { AuthAdminUseCase } from "./authAdminUseCase"
import { schema } from "../../../validation";
class AuthAdminController {
    constructor(
        private authAdminUseCase: AuthAdminUseCase
    ) { }

    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }
        const payLoad = await this.authAdminUseCase.execute({ email, password})

        return res.status(200).json(payLoad)
    }
}

export { AuthAdminController }