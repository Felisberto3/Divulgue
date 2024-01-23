import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository"


class UpdateProvinciaUseCase {
    constructor(
        private provinciaRepository: ProvinciaRepository
        ) {  }

    async execute(id: number, name:string){

        return await this.provinciaRepository.update(id,name)
    }
}

export { UpdateProvinciaUseCase }