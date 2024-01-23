import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository"
import { UpdateAdminController } from "../../../admin/usecases/updateAdmin/UpdateAdminController"
import { UpdateAdminUseCase } from "../../../admin/usecases/updateAdmin/UpdateAdminUseCase"



const adminRepository = new AdminRepository()
const updateAdminUseCase = new UpdateAdminUseCase(adminRepository)
const updateAdmin =  new UpdateAdminController(updateAdminUseCase)

export  { updateAdmin }