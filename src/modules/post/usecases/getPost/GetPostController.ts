import { Request,Response } from "express";
import { GetPostUseCase } from "./GetPostUseCase";

class GetPostController {
    constructor(private getPostUseCase: GetPostUseCase) { }

    async handle(req:Request, res:Response) {
        const { id  } = req.params

        const newPost = await this.getPostUseCase.execute(Number(id))

        return res.status(201).json(newPost)
    }
}

export { GetPostController } 
