import { Router,Request,Response } from "express";
import { createAdmin } from "../modules/admin/usecases/createAdmin";
import { getAdmin } from "../modules/admin/usecases/getAdmin";
import { authAdmin } from "../modules/admin/usecases/authAdmin";
import { deleteAdmin } from "../modules/admin/usecases/deleteAdmin";



const adminRouter = Router()

adminRouter.post('/create/admin',async (req:Request, res:Response ) => {
    return createAdmin.handle(req,res)
})

adminRouter.post('/auth/admin',async (req:Request, res:Response ) => {
    return authAdmin.handle(req,res)
})

adminRouter.get('/get/admin/:id',async (req:Request, res:Response ) => {
    return getAdmin.handle(req,res) 
}) 
adminRouter.delete('/delete/admin/:id',async (req:Request, res:Response ) => {
    return deleteAdmin.handle(req,res) 
}) 
export { adminRouter }