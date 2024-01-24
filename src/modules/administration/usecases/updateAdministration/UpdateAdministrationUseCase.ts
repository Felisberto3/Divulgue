import { IUpdateAdminDTO } from "../../../admin/repositories/IAdminRepository"
import { IUpdateAdministrationsDTO } from "../../repositories/IAdministrationRepository"
import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"



class UpdateAdministrationUseCase {
    constructor(
        private administrationRepository: AdministrationsRepository
        ) {  }

    async execute(data: IUpdateAdministrationsDTO){
        // só faz o update quem for adminitrator
        return await this.administrationRepository.update(data)
    }
}

export { UpdateAdministrationUseCase }