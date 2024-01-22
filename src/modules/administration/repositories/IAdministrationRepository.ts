import { Administrations } from "@prisma/client";

interface IcreateUseCaseDTO {
    name: string,
    administrations: string,
    provincia: string,
    admin:string
}
interface ICreateAdministrationsDTO {
    name: string;
    email: string;
    adminId: number;
}
interface IAdministrationsRepositoryDTO {
    findAdministrationsByName(name: string): Promise<Administrations | null>
    create(data: ICreateAdministrationsDTO): Promise<Administrations>
    findById(id: number): Promise<Administrations | null>
    findAll(): Promise<Administrations[] | null>
}

export { IAdministrationsRepositoryDTO, ICreateAdministrationsDTO, IcreateUseCaseDTO }