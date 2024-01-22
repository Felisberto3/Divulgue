import { hash } from "bcryptjs";
import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository";
import { IcreateUseCaseDTO } from "../../repositories/IAdminRepository";

class CreateAdminUseCase {
    constructor(
        private adminRepository: AdminRepository
    ) { }

    async execute({ email, firstName, lastName, password }: IcreateUseCaseDTO) {

        const adminExist = await this.adminRepository.findAdminByEmail(email)

        if (adminExist) {
            throw new Error("Admin already exist");
        }

        const passwordHash = await hash(password, 8)

        return await this.adminRepository.create({ email, firstName, lastName, passwordHash, })

    }
}

export { CreateAdminUseCase }