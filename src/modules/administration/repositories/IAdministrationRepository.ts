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
interface IUpdateAdministrationsDTO {
    id: number;
    name: string;
    email: string;
    adminId: number;
}
interface IAdministrationsRepositoryDTO {
    findAdministrationsByName(name: string): Promise<Administrations | null>
    create(data: ICreateAdministrationsDTO): Promise<Administrations>
    findById(id: number): Promise<Administrations | null>
    findAll(): Promise<Administrations[] | null>
    update(data: IUpdateAdministrationsDTO): Promise<Administrations>
    delete(id: number): Promise<boolean>
}

export { IAdministrationsRepositoryDTO, ICreateAdministrationsDTO, IcreateUseCaseDTO,IUpdateAdministrationsDTO }