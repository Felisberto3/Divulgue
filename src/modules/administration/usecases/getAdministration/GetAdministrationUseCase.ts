import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"

class GetAdministrationsUseCase {
    constructor(
        private administrationsRepository: AdministrationsRepository,
        ) { }

    async execute(id: number) {
        
        if (!id ) {
            return await this.administrationsRepository.findAll()
        }

            return await this.administrationsRepository.findById(id)

    }
}

export {GetAdministrationsUseCase }