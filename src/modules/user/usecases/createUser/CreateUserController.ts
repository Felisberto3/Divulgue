import { CreateUserUseCase } from "./CreateUserUseCase";
import { Response, Request } from "express";
import jwt from 'jsonwebtoken'

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { email, password, firstName, surName, municipio } = req.body

        const newUser = await this.createUserUseCase.execute({ email, municipio, password, firstName, surName })

        const token = jwt.sign({
            email,
            userId: newUser.id

        }, process.env.KEY!,
        { expiresIn: '10d' })

        return res.json({
            newUser,
            token
        })
    }
}

export {  CreateUserController }