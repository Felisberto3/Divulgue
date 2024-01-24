import { Router,Request,Response } from "express";
import { createAdministrations } from "../modules/administration/usecases/createAdministration";
import { getAdministrations } from "../modules/administration/usecases/getAdministration";
import { deleteAdministrations } from "../modules/administration/usecases/deleteAdministration";
import { currentUser } from "../middleware/current-user";
import { updateAdministration } from "../modules/administration/usecases/updateAdministration";


const administrationsRouter = Router()

administrationsRouter.post('/create/administrations',async (req:Request, res:Response ) => {
    return createAdministrations.handle(req,res)
})

administrationsRouter.get('/get/administrations/:id',async (req:Request, res:Response ) => {
    return getAdministrations.handle(req,res)
})

administrationsRouter.delete('/delete/administrations/:id', currentUser, async (req:Request, res:Response ) => {
    return deleteAdministrations.handle(req,res)
})


administrationsRouter.put('/put/administrations/:id', currentUser, async (req:Request, res:Response ) => {
    return updateAdministration.handle(req,res)
})

export { administrationsRouter }