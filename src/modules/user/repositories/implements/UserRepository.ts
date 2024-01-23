import { User } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { ICreateUserDTO, IRepositoryDTO, IUpdateUserDTO } from "../IUserRepository";

class UserRepository implements IRepositoryDTO {
    constructor() { }

    async create(data: ICreateUserDTO): Promise<User> {
        return prisma.user.create({ data: data })
    }

    async findByEmail(email: string): Promise<User | null> {
        if (!email) return null

        return await prisma.user.findUnique({ where: { email } })
    }

    async findById(id: number): Promise<User | null> {
        if (!id) return null
        return await prisma.user.findFirst({ where: { id } })
    }

    async findAll(): Promise<User[]> {
        return await prisma.user.findMany()
    }

    async delete(id: number): Promise<boolean> {

        await prisma.user.delete({ where: { id } })
        return true
    }
    async update({ id, bornDate, email, firstName, surName, img, municipioId, passwordHash }: IUpdateUserDTO): Promise<User> {

        return await prisma.user.update({
            where: { id },
            data: { bornDate, email, firstName, surName, img, municipioId, passwordHash }
        }) 
    }

}
  
export { UserRepository }  