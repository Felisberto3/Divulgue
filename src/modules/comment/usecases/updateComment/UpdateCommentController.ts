import { Response, Request } from "express";
import { UpdateCommentUseCase } from "./UpdateCommentUseCase";


class UpdateCommentController {
    constructor(private updateCommentUseCase: UpdateCommentUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } = req.currenUser
        const { administratonId,desc,postId,img } = req.body

        //Falta validar com YUP

        const Comments =  await this.updateCommentUseCase.execute(
            Number(id),
            userId,
            {administratonId,desc,img}
            )

        return res.status(200).json(Comments)
    }
}

export {  UpdateCommentController }