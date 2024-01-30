import { UserRepository } from "../../repositories/implements/UserRepository"

class GetUserPhotoUseCase {
    constructor(
        private userRepository: UserRepository
        ) {  }

    async execute(id: number){
        if (!id) {
           throw new Error("User id not exist");
        }

        return await this.userRepository.findById(id)
    }
}

export { GetUserPhotoUseCase }