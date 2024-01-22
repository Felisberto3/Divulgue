import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository";

class GetProvinciaUseCase {
    constructor(
        private provinciaRepository: ProvinciaRepository,
        ) { }

    async execute(id: number) {
        
        if (!id ) {
            return await this.provinciaRepository.findAll()
        }

            return await this.provinciaRepository.findById(id)

    }
}

export {GetProvinciaUseCase }