import { Response, Request } from "express";
import { GetPostPhotoUseCase } from "./GetPostPhotoUseCase";

class GetPostPhotoController {
    constructor(private getPostPhotoUseCase: GetPostPhotoUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        const Post =  await this.getPostPhotoUseCase.execute(Number(id))

        if (!Post?.img) {
            return res.status(200).json({ message: "there is not Post photo yet"})
             
        }

        const imgPath = Post.img
        return res.status(200).sendFile(imgPath!)
    }
}

export {  GetPostPhotoController }