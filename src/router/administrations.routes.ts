import { Router,Request,Response } from "express";
import { createAdministrations } from "../modules/administration/usecases/createAdministration";
import { getAdministrations } from "../modules/administration/usecases/getAdministration";


const administrationsRouter = Router()

administrationsRouter.post('/create/administrations',async (req:Request, res:Response ) => {
    return createAdministrations.handle(req,res)
})

administrationsRouter.get('/get/administrations/:id',async (req:Request, res:Response ) => {
    return getAdministrations.handle(req,res)
})

export { administrationsRouter }