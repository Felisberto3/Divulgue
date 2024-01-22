import { AdminRepository } from "../../repositories/implements/AdminRepository"
import { GetAdminController } from "./GetAdminController"
import { GetAdminUseCase } from "./GetAdminUseCase"


const adminRepository = new AdminRepository()
const getAdminUseCase = new GetAdminUseCase(adminRepository)
const getAdmin = new GetAdminController(getAdminUseCase)

export { getAdmin }