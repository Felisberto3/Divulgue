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
            throw new Error("Administration Already Exist");

        const admin = await this.adminRepository.findById(adminId)
        if (!admin) 
            throw new Error("Admin User Id not exist");

        return  await this.administrationRepository.create({ adminId,email,name})

    } 
}

export {CreateAdministrationUseCase } 