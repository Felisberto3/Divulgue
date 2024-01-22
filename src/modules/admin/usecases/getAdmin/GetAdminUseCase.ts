import { AdminRepository } from "../../repositories/implements/AdminRepository"

class GetAdminUseCase {
    constructor(
        private adminRepository: AdminRepository,
        ) { }

    async execute(id: number) {
        
        if (!id ) {
            return await this.adminRepository.findAll()
        }

            return await this.adminRepository.findById(id)

    }
}

export {GetAdminUseCase }