import { Request,Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";
import * as Yup from 'yup'

class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) { }

    async handle(req:Request, res:Response) {
        const { administrationId,desc,img} = req.body
        const { userId  } = req.currenUser

        
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
        const newPost = await this.createPostUseCase.execute({ administrationId,desc,userId,img})

        return res.status(201).json(newPost)
    } 
}

export { CreatePostController }