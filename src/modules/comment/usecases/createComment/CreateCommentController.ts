import { Request,Response } from "express";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import { schema } from "../../../validation";

class CreateCommentController {
    constructor(private createCommentUseCase: CreateCommentUseCase) { }

    async handle(req:Request, res:Response) {
        let {administratonId,desc,postId,img} = req.body
        const { userId  } = req.currenUser

        try {
            await schema.validate(req.body);

        } catch (error) {
            res.status(400).json({ mensagem: 'Erro de validação', erros: error });
        }

       
        const newComment = await this.createCommentUseCase.execute({administratonId,desc,postId,userId,img})

        return res.status(201).json(newComment)
    } 
}

export { CreateCommentController }