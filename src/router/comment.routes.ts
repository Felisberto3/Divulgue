import { Router,Request,Response } from "express";
import { currentUser } from "../middleware/current-user";
import { createComment } from "../modules/comment/usecases/createComment";
import { getComment } from "../modules/comment/usecases/getComment";
import { deleteComment } from "../modules/comment/usecases/deleteComment";
import { updateComment } from "../modules/comment/usecases/updateComment";



const commentRouter = Router()



commentRouter.post('/create/comment', currentUser, async (req:Request, res:Response ) => {
    return createComment.handle(req,res)
})

commentRouter.get('/get/comment/:id',async (req:Request, res:Response ) => {
    return getComment.handle(req,res)
})

commentRouter.delete('/delete/comment/:id', currentUser, async (req:Request, res:Response ) => {
    return deleteComment.handle(req,res) 
})
commentRouter.put('/put/comment/:id',currentUser, async (req:Request, res:Response ) => {
    return updateComment.handle(req,res) 
})
 
export { commentRouter }