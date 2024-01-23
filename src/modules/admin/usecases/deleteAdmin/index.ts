import { AdminRepository } from "../../repositories/implements/AdminRepository"
import { DeleteAdminController } from "./DeleteAdminController"
import { DeleteAdminUseCase } from "./DeleteAdminUseCase"






const adminRepository = new AdminRepository()
const deleteAdminUseCase = new DeleteAdminUseCase(adminRepository)
const deleteAdmin =  new DeleteAdminController(deleteAdminUseCase)

export  { deleteAdmin }