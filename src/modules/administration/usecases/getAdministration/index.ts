import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"
import { GetAdminitrationsController } from "./GetAdministrationController"
import { GetAdministrationsUseCase } from "./GetAdministrationUseCase"


const administratiosRepository = new AdministrationsRepository()
const getAdministratiosUseCase = new GetAdministrationsUseCase(administratiosRepository)
const getAdministrations = new GetAdminitrationsController(getAdministratiosUseCase)

export { getAdministrations }