import { Administrations } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { IAdministrationsRepositoryDTO, ICreateAdministrationsDTO } from "../IAdministrationRepository";

class AdministrationsRepository implements IAdministrationsRepositoryDTO {
    constructor() { }

    async findAdministrationsByName(name: string): Promise<Administrations | null> {
        if (name) return null
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

}

export { AdministrationsRepository }