import { hash } from "bcryptjs";
import { ICreateUseCaseDTO } from "../../repositories/IUserRepository";
import { UserRepository } from "../../repositories/implements/UserRepository";
import { MunicipioRepository } from "../../../municipio/repositories/implements/MunicipioRepository";

class CreateUserUseCase {
    constructor(
        private userRepository: UserRepository,
        private municipioRepository: MunicipioRepository
        ) {  }

    async execute(data: ICreateUseCaseDTO){
        const { password, municipio, email,firstName,surName} = data

        const userExist = await this.userRepository.findByEmail(email)

        if (userExist) 
            throw new Error("User already Exist");
        
        const passwordHash = await hash(password, 8)

        const municipioResult = await this.municipioRepository.findMunicipioByName(municipio)
        
        if (!municipioResult) 
            throw new Error("Municipio does not exist, please try another!");

        return await this.userRepository.create({ 
            email,
            municipioId: municipioResult!.id,
            passwordHash,
            firstName,
            surName
        })
        
    }
}

export { CreateUserUseCase }