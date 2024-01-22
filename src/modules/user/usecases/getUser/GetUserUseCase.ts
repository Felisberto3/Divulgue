import { UserRepository } from "../../repositories/implements/UserRepository";

class GetUserUseCase {
    constructor(
        private userRepository: UserRepository
        ) {  }

    async execute(id: number){
        if (!id) {
            return await this.userRepository.findAll()
        }

        return await this.userRepository.findById(id)
    }
}

export { GetUserUseCase }