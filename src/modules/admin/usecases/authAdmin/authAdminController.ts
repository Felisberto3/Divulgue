import { Request, Response } from "express"
import { AuthAdminUseCase } from "./authAdminUseCase"
class AuthAdminController {
    constructor(
        private authAdminUseCase: AuthAdminUseCase
    ) { }

    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const payLoad = await this.authAdminUseCase.execute({ email, password})

        return res.status(200).json(payLoad)
    }
}

export { AuthAdminController }