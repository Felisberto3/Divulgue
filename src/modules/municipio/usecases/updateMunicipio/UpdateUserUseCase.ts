import { IUpdateAdminDTO } from "../../../admin/repositories/IAdminRepository"
import { IMunicipioUpdateDTO } from "../../repositories/IMunicipioRepository"
import { MunicipioRepository } from "../../repositories/implements/MunicipioRepository"


class UpdateMunicipioUseCase {
    constructor(
        private municipioRepository: MunicipioRepository
        ) {  }

    async execute(data: IMunicipioUpdateDTO){
        // só faz o update quem for adminitrator
        return await this.municipioRepository.update(data)
    }
}

export { UpdateMunicipioUseCase }