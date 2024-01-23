import { AdminRepository } from "../../repositories/implements/AdminRepository"
import { UpdateAdminController } from "./UpdateAdminController"
import { UpdateAdminUseCase } from "./UpdateAdminUseCase"



const adminRepository = new AdminRepository()
const updateAdminUseCase = new UpdateAdminUseCase(adminRepository)
const updateAdmin =  new UpdateAdminController(updateAdminUseCase)

export  { updateAdmin }