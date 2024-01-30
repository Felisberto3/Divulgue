import { hash } from "bcryptjs";
import { ICreateUseCaseDTO } from "../../repositories/IUserRepository";
import { UserRepository } from "../../repositories/implements/UserRepository";
import { MunicipioRepository } from "../../../municipio/repositories/implements/MunicipioRepository";
import { AppError } from "../../../../error/AppError";

class CreateUserUseCase {
    constructor(
        private userRepository: UserRepository,
        private municipioRepository: MunicipioRepository
    ) { }

    async execute(data: ICreateUseCaseDTO) {
        const { password, municipio, email, firstName, surName } = data

        const userExist = await this.userRepository.findByEmail(email)

        console.log(userExist);
        
        if (userExist){
             throw new AppError("User already Exist", 400);
        }

        const passwordHash = await hash(password, 8)

        const municipioResult = await this.municipioRepository.findMunicipioByName(municipio)


        if (!municipioResult) {
            throw new AppError("Municipio does not exist, please try another!", 400);
        }
        const municipioId = municipioResult!.id
        return await this.userRepository.create({ 
            email, 
            municipioId,
            passwordHash,
            firstName,
            surName
        })

    }
}

export { CreateUserUseCase }