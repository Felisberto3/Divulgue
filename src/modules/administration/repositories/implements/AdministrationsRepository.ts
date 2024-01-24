import { Administrations } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { IAdministrationsRepositoryDTO, ICreateAdministrationsDTO, IUpdateAdministrationsDTO } from "../IAdministrationRepository";
import { boolean, number } from "yup";

class AdministrationsRepository implements IAdministrationsRepositoryDTO {
    constructor() { }

    async findAdministrationsByName(name: string): Promise<Administrations | null> {
        if (!name) return null
        return await prisma.administrations.findUnique({ where: { name }})
    }

    async findByEmail(email: string): Promise<Administrations | null>{
        if (!email) return null
        
        return await prisma.administrations.findUnique({ where: { email}})
    }

    async create(data: ICreateAdministrationsDTO): Promise<Administrations> {
        return await prisma.administrations.create({ data : data })
    }

    async findAll(): Promise<Administrations[]> {

        return await prisma.administrations.findMany()
    }

    async findById(id: number): Promise<Administrations | null> {
        if (!id)  return null

        return await prisma.administrations.findFirst({ where: { id }})
    }

    async delete(id: number): Promise<boolean> {
        await prisma.administrations.delete({ where: { id }})
        return true
    }
    async update({adminId,email,id,name }: IUpdateAdministrationsDTO): Promise<Administrations> {
        return await prisma.administrations.update({
            where: { id },
            data: { adminId,email,name}
        })
    }

}

export { AdministrationsRepository }