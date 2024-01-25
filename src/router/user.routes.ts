import { Router,Request,Response } from "express";
import { createUser } from "../modules/user/usecases/createUser";
import { getUser } from "../modules/user/usecases/getUser";
import { deleteUser } from "../modules/user/usecases/deleteUser";
import { updateUser } from "../modules/user/usecases/updateUser";
import { currentUser } from "../middleware/current-user";
import { upload } from "../middleware/multer";
import { getUserPhoto } from "../modules/user/usecases/getUserPhoto";

const userRouter = Router()



userRouter.post('/create/user',async (req:Request, res:Response ) => {
    return createUser.handle(req,res)
})

userRouter.get('/get/user/:id',async (req:Request, res:Response ) => {
    return getUser.handle(req,res)
})

userRouter.delete('/delete/user/:id',async (req:Request, res:Response ) => {
    return deleteUser.handle(req,res) 
})
userRouter.put('/put/user/',currentUser, upload.single('file'), async (req:Request, res:Response ) => {
    return updateUser.handle(req,res) 
})
userRouter.get('/get/photo/user/:id',currentUser, upload.single('file'), async (req:Request, res:Response ) => {
    return getUserPhoto.handle(req,res) 
}) 
 
export { userRouter }