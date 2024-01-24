import { Response, Request } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";


class UpdatePostController {
    constructor(private updatePostUseCase: UpdatePostUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { userId } = req.currenUser
        const { administrationId,desc,img} = req.body

        //Falta validar com YUP

        const Posts =  await this.updatePostUseCase.execute(
            Number(id),
            {administrationId,desc,img,userId}
            )

        return res.status(200).json(Posts)
    }
}

export {  UpdatePostController }