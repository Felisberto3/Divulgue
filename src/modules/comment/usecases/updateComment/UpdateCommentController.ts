import { Response, Request } from "express";
import { UpdateCommentUseCase } from "./UpdateCommentUseCase";
import { schema } from "../../../validation";


class UpdateCommentController {
    constructor(private updateCommentUseCase: UpdateCommentUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } = req.currenUser
        const { administratonId,desc,postId,img } = req.body

        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }

        const Comments =  await this.updateCommentUseCase.execute(
            Number(id),
            userId,
            {administratonId,desc,img}
            )

        return res.status(200).json(Comments)
    }
}

export {  UpdateCommentController }