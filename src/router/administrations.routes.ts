import { Router,Request,Response } from "express";
import { createAdministrations } from "../modules/administration/usecases/createAdministration";
import { getAdministrations } from "../modules/administration/usecases/getAdministration";
import { deleteAdministrations } from "../modules/administration/usecases/deleteAdministration";


const administrationsRouter = Router()

administrationsRouter.post('/create/administrations',async (req:Request, res:Response ) => {
    return createAdministrations.handle(req,res)
})

administrationsRouter.get('/get/administrations/:id',async (req:Request, res:Response ) => {
    return getAdministrations.handle(req,res)
})

administrationsRouter.delete('/delete/administrations/:id',async (req:Request, res:Response ) => {
    return deleteAdministrations.handle(req,res)
})

export { administrationsRouter }