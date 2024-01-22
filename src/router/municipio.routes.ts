import { Router,Request,Response } from "express";
import { createMunicipio } from "../modules/municipio/usecases/createMunicipio";
import { getMunicipio } from "../modules/municipio/usecases/getMunicipio";

const municipioRouter = Router()

municipioRouter.post('/create/municipio',async (req:Request, res:Response ) => {
    return createMunicipio.handle(req,res)
})

municipioRouter.get('/get/municipio/:id',async (req:Request, res:Response ) => {
    return getMunicipio.handle(req,res)
})

export { municipioRouter }