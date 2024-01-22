import { AdministrationsRepository } from "../../../administration/repositories/implements/AdministrationsRepository";
import { ProvinciaRepository } from "../../../provincia/repositories/implements/ProvinciaRepository";
import { IcreateUseCaseDTO } from "../../repositories/IMunicipioRepository";
import { MunicipioRepository } from "../../repositories/implements/MunicipioRepository";

class CreateMunicipioUseCase {
    constructor(
        private municipioRepository: MunicipioRepository,
        private provinciaRepository: ProvinciaRepository,
        private administrationsRepository: AdministrationsRepository,
    ) { }

    async execute({ administration, name, provincia }: IcreateUseCaseDTO) {

        const provinciaResult = await this.provinciaRepository.findByName(provincia)

        if (!provinciaResult) throw new Error("This provincia not exist");

        const administrationResult = await this.administrationsRepository.findAdministrationsByName(administration)

        if (!administrationResult) throw new Error("This administracao not exist");
 

        return this.municipioRepository.create({
            provinciaId: provinciaResult?.id,
            administrationId: administrationResult.id,
            name,

        })
    }
}

export { CreateMunicipioUseCase }