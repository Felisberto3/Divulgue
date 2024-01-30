import { AppError } from "../../../../error/AppError";
import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository";
import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"

class DeleteAdministrationUseCase {
    constructor(
        private administrationRepository: AdministrationsRepository,
        private adminRepository: AdminRepository
        ) {  }

    async execute(id: number, userId: number){
        const adminExist = await  this.adminRepository.findById(userId)
        if (!adminExist) {
            new AppError("You are not an administrator", 400);
        }

        return await this.administrationRepository.delete(id)
    }
}

export { DeleteAdministrationUseCase }