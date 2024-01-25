import { Response, Request } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

class DeletePostController {
    constructor(private deletePostUseCase: DeletePostUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } =req.currenUser

        if (!Number(id)) 
            throw new Error("Post id does not exist");
            
        const Posts =  await this.deletePostUseCase.execute(Number(id),userId)

        return res.status(200).json(Posts)
    }
}

export {  DeletePostController }