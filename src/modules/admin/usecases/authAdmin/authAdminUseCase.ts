import { AdminRepository } from "../../repositories/implements/AdminRepository"
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { IAuthUserDTO } from "../../repositories/IAdminRepository";
class AuthAdminUseCase {
    constructor( private adminRepository: AdminRepository) { }

    async execute({email, password}: IAuthUserDTO) {

        const userExist = await this.adminRepository.findAdminByEmail(email)
        
        if (!userExist) {
            throw new Error("Email or password incorret");
        }

        const equalPassword = await compare(password, userExist.passwordHash!)

        
        if (!equalPassword) {
            throw new Error("Email or password incorret"); 
        }

        const token = jwt.sign( 
            {
                email,
                userId: userExist.id
            }, 
            process.env.KEY!,
            { expiresIn: "10d"}
        )
        return {
            userExist,
            token
        }
    }
}

export { AuthAdminUseCase }