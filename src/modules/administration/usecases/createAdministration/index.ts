import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository"
import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"
import { CreateAdministratuionController } from "./CreateAdministrationController"
import { CreateAdministrationUseCase } from "./CreateAdministrationUseCase"


const administrationsRepository = new AdministrationsRepository()
const adminRepository = new AdminRepository()
const createAdministrationsUseCase = new CreateAdministrationUseCase(administrationsRepository,adminRepository)
const createAdministrations = new CreateAdministratuionController(createAdministrationsUseCase)

export { createAdministrations }