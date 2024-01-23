import { AdminRepository } from "../../repositories/implements/AdminRepository"

class DeleteAdminUseCase {
    constructor(
        private adminRepository: AdminRepository
        ) {  }

    async execute(id: number){

        const mainAdmin = await this.adminRepository.findById(id)

        if (mainAdmin?.type === 'main') {
            return await this.adminRepository.delete(id)
        }

        throw new Error("You are not allowed to delete any administrator!");
        
    }
}

export { DeleteAdminUseCase }