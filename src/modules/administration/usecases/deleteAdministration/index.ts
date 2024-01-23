import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository"
import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"
import { DeleteAdministrationController } from "./DeleteAdministrationController"
import { DeleteAdministrationUseCase } from "./DeleteAdministrationUseCase"




const adminRepository= new AdminRepository()
const administrationsRepository = new AdministrationsRepository()
const deleteAdministrationsUseCase = new DeleteAdministrationUseCase(administrationsRepository,adminRepository)
const deleteAdministrations =  new DeleteAdministrationController(deleteAdministrationsUseCase)

export  { deleteAdministrations }