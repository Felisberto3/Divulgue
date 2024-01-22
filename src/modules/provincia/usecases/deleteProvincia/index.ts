import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository"
import { DeleteProvinciaController } from "./DeleteProvinciaController"
import { DeleteProvinciaUseCase } from "./DeleteProvinciaUseCase"



const provinciaRepository = new ProvinciaRepository()
const deleteProvinciaUseCase = new DeleteProvinciaUseCase(provinciaRepository)
const deleteProvincia =  new DeleteProvinciaController(deleteProvinciaUseCase)

export  { deleteProvincia }