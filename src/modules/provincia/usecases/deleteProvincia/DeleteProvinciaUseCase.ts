import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository";
import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository";

class DeleteProvinciaUseCase {
    constructor(
        private provinciaRepository: ProvinciaRepository,
        private adminRepository: AdminRepository
        ) {  }

    async execute(id: number,userId:number){

        const adminExist = await  this.adminRepository.findById(userId)
        if (!adminExist) {
            throw new Error("You are not an administrator");
        }
        return await this.provinciaRepository.delete(id)
    }
}

export { DeleteProvinciaUseCase }