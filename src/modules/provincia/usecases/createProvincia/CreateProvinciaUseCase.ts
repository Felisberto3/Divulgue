import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository";

class CreateProvinciaUseCase {
    constructor(
        private provinciaRepository: ProvinciaRepository,
        ) { }

    async execute(name: string) {
        
        return await this.provinciaRepository.create(name)
    }
}

export {CreateProvinciaUseCase }