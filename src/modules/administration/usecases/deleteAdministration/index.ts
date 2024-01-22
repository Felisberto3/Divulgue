import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"
import { DeleteAdministrationController } from "./DeleteAdministrationController"
import { DeleteAdministrationUseCase } from "./DeleteAdministrationUseCase"





const administrationsRepository = new AdministrationsRepository()
const deleteAdministrationsUseCase = new DeleteAdministrationUseCase(administrationsRepository)
const deleteAdministrations =  new DeleteAdministrationController(deleteAdministrationsUseCase)

export  { deleteAdministrations }