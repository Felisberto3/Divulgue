import { Response, Request } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { hash } from "bcryptjs";
import * as  Yup from 'yup'

class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { userId:id } = req.currenUser
        const { bornDate, email, firstName, surName, img, municipioId, password } = req.body

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            firstName: Yup.string().required(),
            surName: Yup.string().required(),
            bornDate: Yup.string().required(),
            img: Yup.string().required(),
            municipioId: Yup.number().required(),

        })

       
            try {
                await schema.validate(req.body);

            } catch (error) {
                res.status(400).json({ mensagem: 'Erro de validação', erros: error });
            }
            
        let passwordHash = ''
        if (password) {
             passwordHash = await hash(password, 8)
        }

        const users =  await this.updateUserUseCase.execute({ id, bornDate, email, firstName, surName, img, municipioId, passwordHash})

        return res.status(200).json(users)
    }
}

export {  UpdateUserController }