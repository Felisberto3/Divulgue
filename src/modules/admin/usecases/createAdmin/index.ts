import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository"
import { CreateAdminController } from "./CreateAdminController"
import { CreateAdminUseCase } from "./CreateAdminUseCase"



const adminRepository = new AdminRepository()
const createAdminUseCase = new CreateAdminUseCase(adminRepository)
const createAdmin = new CreateAdminController(createAdminUseCase)

export { createAdmin }