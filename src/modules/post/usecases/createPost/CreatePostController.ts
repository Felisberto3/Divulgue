import { Request,Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) { }

    async handle(req:Request, res:Response) {
        const { administrationId,desc,img} = req.body
        const { userId  } = req.currenUser

        //validar os dados com YUP
        const newPost = await this.createPostUseCase.execute({ administrationId,desc,userId,img})

        return res.status(201).json(newPost)
    } 
}

export { CreatePostController }