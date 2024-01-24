import { Request,Response } from "express";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

class CreateCommentController {
    constructor(private createCommentUseCase: CreateCommentUseCase) { }

    async handle(req:Request, res:Response) {
        const {administratonId,desc,postId,img} = req.body
        const { userId  } = req.currenUser

        //validar os dados com YUP
        const newComment = await this.createCommentUseCase.execute({administratonId,desc,postId,userId,img})

        return res.status(201).json(newComment)
    } 
}

export { CreateCommentController }