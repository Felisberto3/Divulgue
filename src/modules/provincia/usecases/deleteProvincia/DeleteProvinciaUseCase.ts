import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository";

class DeleteProvinciaUseCase {
    constructor(
        private provinciaRepository: ProvinciaRepository
        ) {  }

    async execute(id: number){

        return await this.provinciaRepository.delete(id)
    }
}

export { DeleteProvinciaUseCase }