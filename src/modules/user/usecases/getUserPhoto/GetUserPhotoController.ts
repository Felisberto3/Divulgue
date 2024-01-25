import { Response, Request } from "express";
import { GetUserPhotoUseCase } from "./GetUserUserPhotoCase";

class GetUserPhotoController {
    constructor(private getUserPhotoUseCase: GetUserPhotoUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        const user =  await this.getUserPhotoUseCase.execute(Number(id))

        if (!user?.img) {
            return res.status(200).json({ message: "there is not user photo yet"})
             
        }

        const imgPath = user.img
        return res.status(200).sendFile(imgPath!)
    }
}

export {  GetUserPhotoController }