import { Request,Response } from "express";
import { GetCommentUseCase } from "./GetCommentUseCase";

class GetCommentController {
    constructor(private getCommentUseCase: GetCommentUseCase) { }

    async handle(req:Request, res:Response) {
        const { id  } = req.params

        const newComment = await this.getCommentUseCase.execute(Number(id))

        return res.status(200).json(newComment)
    }
}

export { GetCommentController } 
