import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"

class DeleteAdministrationUseCase {
    constructor(
        private administrationRepository: AdministrationsRepository
        ) {  }

    async execute(id: number){

        return await this.administrationRepository.delete(id)
    }
}

export { DeleteAdministrationUseCase }