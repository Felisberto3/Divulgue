import { Provincia } from "@prisma/client";
import { IProvinciaRepositoryDTO } from "../IProvincia";
import { prisma } from "../../../../prisma";

class ProvinciaRepository implements IProvinciaRepositoryDTO {
    constructor() { }

    async create(name: string): Promise<Provincia> {
        return await prisma.provincia.create({ data: {name}})
    }


    async findAll(): Promise<Provincia[]> {
        return await prisma.provincia.findMany()
    }

    async findById(id: number): Promise<Provincia | null > {
        if (!id) return  null
        return await prisma.provincia.findFirst({ where: {id}})
    }
    async findByName(name: string): Promise<Provincia | null> {
        if (!name) return  null
        return await prisma.provincia.findUnique({ where: {name}})
    }

    async delete(id: number): Promise<boolean> {
        await prisma.provincia.delete({ where: { id }})
        return true
    }

    async update(id: number, name:string): Promise<Provincia> {
        return await prisma.provincia.update({
            where:{ id },
            data: { name}
        })
    }
    
     
}

export { ProvinciaRepository }