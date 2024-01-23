import { Router,Request,Response } from "express";
import { createProvincia } from "../modules/provincia/usecases/createProvincia";
import { getProvincia } from "../modules/provincia/usecases/getProvincia";
import { deleteProvincia } from "../modules/provincia/usecases/deleteProvincia";
import { currentUser } from "../middleware/current-user";
import { updateProvincia } from "../modules/provincia/usecases/updateProvincia";


const provinciaRouter = Router()

provinciaRouter.post('/create/provincia',currentUser, async (req:Request, res:Response ) => {
    return createProvincia.handle(req,res)
})

provinciaRouter.get('/get/provincia/:id',async (req:Request, res:Response ) => {
    return getProvincia.handle(req,res)
})

provinciaRouter.delete('/delete/provincia/:id',currentUser ,async (req:Request, res:Response ) => {
    return deleteProvincia.handle(req,res)
})

provinciaRouter.put('/put/provincia/:id',currentUser ,async (req:Request, res:Response ) => {
    return updateProvincia.handle(req,res)
})
export { provinciaRouter }