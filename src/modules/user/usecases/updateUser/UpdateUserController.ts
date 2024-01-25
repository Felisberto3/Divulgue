import { Response, Request } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { hash } from "bcryptjs";
import * as  Yup from 'yup'

class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { userId:id } = req.currenUser
        const { bornDate, email, firstName, surName, municipioId, password } = req.body

        let img = ''
        
        if (req.file) {
             img = req.file.path
        }
        const schema = Yup.object().shape({
            email: Yup.string().email(),
            password: Yup.string(),
            firstName: Yup.string(),
            surName: Yup.string(),
            bornDate: Yup.string(),
            img: Yup.string(),
            municipioId: Yup.number(),

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