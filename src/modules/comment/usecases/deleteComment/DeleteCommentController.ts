import { Response, Request } from "express";
import { DeleteCommentUseCase } from "./DeleteCommentUseCase";

class DeleteCommentController {
    constructor(private deleteCommentUseCase: DeleteCommentUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } =req.currenUser

        if (!Number(id)) 
            throw new Error("Comment id does not exist");
            
        const Comments =  await this.deleteCommentUseCase.execute(Number(id),userId)

        return res.status(200).json(Comments)
    }
}

export {  DeleteCommentController }