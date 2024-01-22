import { Router,Request,Response } from "express";
import { createUser } from "../modules/user/usecases/createUser";
import { getUser } from "../modules/user/usecases/getUser";

const userRouter = Router()

userRouter.post('/create/user',async (req:Request, res:Response ) => {
    return createUser.handle(req,res)
})

userRouter.get('/get/user/:id',async (req:Request, res:Response ) => {
    return getUser.handle(req,res)
})

export { userRouter }