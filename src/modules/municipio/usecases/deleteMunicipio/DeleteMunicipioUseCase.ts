import { MunicipioRepository } from "../../repositories/implements/MunicipioRepository";

class DeleteMunicipioUseCase {
    constructor(
        private MunicipioRepository: MunicipioRepository
        ) {  }

    async execute(id: number){

        return await this.MunicipioRepository.delete(id)
    }
}

export { DeleteMunicipioUseCase }