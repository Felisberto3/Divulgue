import { AppError } from "../../../../error/AppError";
import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository";
import { ICreateAdministrationsDTO } from "../../repositories/IAdministrationRepository"
import { AdministrationsRepository } from "../../repositories/implements/AdministrationsRepository"

class CreateAdministrationUseCase {
    constructor(
        private administrationRepository: AdministrationsRepository,
        private adminRepository: AdminRepository
        ) { }

    async execute({ adminId,email,name}: ICreateAdministrationsDTO) {
        const administrationExist = await this.administrationRepository.findByEmail(email)

        if (administrationExist) 
            new AppError("Administration Already Exist", 400);

        const admin = await this.adminRepository.findById(adminId)
        if (!admin) 
            new AppError("Admin User Id not exist", 400);

        return  await this.administrationRepository.create({ adminId,email,name})

    } 
}

export {CreateAdministrationUseCase } 