import { Municipio } from "@prisma/client";
import { ICreateMunicipioDTO, IMunicipioRepositoryDTO, IMunicipioUpdateDTO } from "../IMunicipioRepository";
import { prisma } from "../../../../prisma";

class MunicipioRepository implements IMunicipioRepositoryDTO {
    constructor() { }

    async findMunicipioByName(name: string): Promise<Municipio | null> {
        if (!name) return null
        return await prisma.municipio.findUnique({ where: { name }})
    }

    async create(data: ICreateMunicipioDTO): Promise<Municipio> {
        return await prisma.municipio.create({ data : data })
    } 

    async findAll(): Promise<Municipio[]> {

        return await prisma.municipio.findMany()
    }

    async findById(id: number): Promise<Municipio | null> {
        if (!id)  return null

        return await prisma.municipio.findFirst({ where: { id }})
    }

    async delete(id: number): Promise<boolean> {
        await prisma.municipio.delete({ where: { id }})
        return true
    }
    async update({ administrationId,id,name,provinciaId}: IMunicipioUpdateDTO): Promise<Municipio> {
       return await prisma.municipio.update({ 
        where: { id  },
        data : { administrationId,id,name,provinciaId}
    })
    }

}

export { MunicipioRepository }