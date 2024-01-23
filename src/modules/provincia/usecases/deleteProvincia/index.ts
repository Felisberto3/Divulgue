import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository"
import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository"
import { DeleteProvinciaController } from "./DeleteProvinciaController"
import { DeleteProvinciaUseCase } from "./DeleteProvinciaUseCase"


const adminRepository= new AdminRepository()
const provinciaRepository = new ProvinciaRepository()
const deleteProvinciaUseCase = new DeleteProvinciaUseCase(provinciaRepository,adminRepository)
const deleteProvincia =  new DeleteProvinciaController(deleteProvinciaUseCase)

export  { deleteProvincia }