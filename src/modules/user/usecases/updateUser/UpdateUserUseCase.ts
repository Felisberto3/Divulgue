import { IUpdateUserDTO } from "../../repositories/IUserRepository";
import { UserRepository } from "../../repositories/implements/UserRepository";

class UpdateUserUseCase {
    constructor(
        private userRepository: UserRepository
        ) {  }

    async execute({id, bornDate, email, firstName, surName, img, municipioId, passwordHash}: IUpdateUserDTO){

        return await this.userRepository.update({ id, bornDate, email, firstName, surName, img, municipioId, passwordHash })
    }
}

export { UpdateUserUseCase }