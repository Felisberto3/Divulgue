import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"
import { UpdateAdministrationController } from "./UpdateAdministrationController"
import { UpdateAdministrationUseCase } from "./UpdateAdministrationUseCase"





const administrationRepository = new AdministrationsRepository()
const updateAdministrationUseCase = new UpdateAdministrationUseCase(administrationRepository)
const updateAdministration =  new UpdateAdministrationController(updateAdministrationUseCase)

export  { updateAdministration }