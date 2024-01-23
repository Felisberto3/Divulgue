import { IUpdateAdminDTO } from "../../repositories/IAdminRepository"
import { AdminRepository } from "../../repositories/implements/AdminRepository"

class UpdateAdminUseCase {
    constructor(
        private adminRepository: AdminRepository
        ) {  }

    async execute(data: IUpdateAdminDTO){

        return await this.adminRepository.update(data)
    }
}

export { UpdateAdminUseCase }