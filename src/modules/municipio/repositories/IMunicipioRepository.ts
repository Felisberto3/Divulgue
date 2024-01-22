import { Municipio } from "@prisma/client";

interface IcreateUseCaseDTO {
    name: string,
    administration: string,
    provincia: string,
}
interface ICreateMunicipioDTO {
    name: string,
    administrationId: number,
    provinciaId: number,
}
interface IMunicipioRepositoryDTO {
    findMunicipioByName(name: string): Promise<Municipio | null>
    create(data: ICreateMunicipioDTO): Promise<Municipio>
    findById(id: number): Promise<Municipio | null>
    findAll(): Promise<Municipio[] | null>
    delete(id: number): Promise<boolean>
}

export { IMunicipioRepositoryDTO, ICreateMunicipioDTO, IcreateUseCaseDTO }