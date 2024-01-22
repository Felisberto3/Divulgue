import { Router,Request,Response } from "express";
import { createProvincia } from "../modules/provincia/usecases/createProvincia";
import { getProvincia } from "../modules/provincia/usecases/getProvincia";
import { deleteProvincia } from "../modules/provincia/usecases/deleteProvincia";


const provinciaRouter = Router()

provinciaRouter.post('/create/provincia',async (req:Request, res:Response ) => {
    return createProvincia.handle(req,res)
})

provinciaRouter.get('/get/provincia/:id',async (req:Request, res:Response ) => {
    return getProvincia.handle(req,res)
})

provinciaRouter.delete('/delete/provincia/:id',async (req:Request, res:Response ) => {
    return deleteProvincia.handle(req,res)
})
export { provinciaRouter }