import { Router,Request,Response } from "express";
import { createPost } from "../modules/post/usecases/createPost";
import { getPost } from "../modules/post/usecases/getPost";
import { deletePost } from "../modules/post/usecases/deletePost";
import { updatePost } from "../modules/post/usecases/updatePost";
import { currentUser } from "../middleware/current-user";


const postRouter = Router()



postRouter.post('/create/post', currentUser, async (req:Request, res:Response ) => {
    return createPost.handle(req,res)
})

postRouter.get('/get/post/:id',async (req:Request, res:Response ) => {
    return getPost.handle(req,res)
})

postRouter.delete('/delete/post/:id', currentUser, async (req:Request, res:Response ) => {
    return deletePost.handle(req,res) 
})
postRouter.put('/put/post/:id',currentUser, async (req:Request, res:Response ) => {
    return updatePost.handle(req,res) 
})
 
export { postRouter }