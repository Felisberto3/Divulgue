import { Provincia } from "@prisma/client";

interface IProvinciaRepositoryDTO {
    create(name: string): Promise<Provincia>
    findByName(name:string): Promise<Provincia | null>
    findAll(): Promise<Provincia[]>
    findById(id:number): Promise<Provincia | null>
}

export { IProvinciaRepositoryDTO }