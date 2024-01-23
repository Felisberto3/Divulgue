import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository"
import { UpdateProvinciaController } from "./UpdateProvinciaController"
import { UpdateProvinciaUseCase } from "./UpdateProvinciaUseCase"



const provinciaRepository = new ProvinciaRepository()
const updateProvinciaUseCase = new UpdateProvinciaUseCase(provinciaRepository)
const updateProvincia =  new UpdateProvinciaController(updateProvinciaUseCase)

export  { updateProvincia }