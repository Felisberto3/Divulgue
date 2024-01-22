import { MunicipioRepository } from "../../repositories/implements/MunicipioRepository";

class GetMunicipioUseCase {
    constructor(
        private municipioRepository: MunicipioRepository,
    ) { }

    async execute(id  : number) {
        if (!id) {
            return await this.municipioRepository.findAll()
        }
       return await this.municipioRepository.findById(id)
    }
}

export { GetMunicipioUseCase }