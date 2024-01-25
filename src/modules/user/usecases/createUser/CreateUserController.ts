import { CreateUserUseCase } from "./CreateUserUseCase";
import { Response, Request } from "express";
import jwt from 'jsonwebtoken'
import * as Yup from 'yup'

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { email, password, firstName, surName, municipio } = req.body


        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            firstName: Yup.string().required(),
            surName: Yup.string().required(),
            municipio: Yup.string().required(),

        })

       
            try {
                await schema.validate(req.body);

            } catch (error) {
                res.status(400).json({ mensagem: 'Erro de validação', erros: error });
            }

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