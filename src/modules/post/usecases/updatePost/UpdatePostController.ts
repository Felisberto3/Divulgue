import { Response, Request } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import * as Yup from 'yup'


class UpdatePostController {
    constructor(private updatePostUseCase: UpdatePostUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } = req.currenUser
        const { administrationId,desc,img} = req.body

        const schema = Yup.object().shape({
            desc: Yup.string().required(),
            img: Yup.string().required(),
            municipioId: Yup.number().required(),

        })

       
        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }

        const Posts =  await this.updatePostUseCase.execute(
            Number(id),
            {administrationId,desc,img,userId}
            )

        return res.status(200).json(Posts)
    }
}

export {  UpdatePostController }