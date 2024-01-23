import { Admin } from "@prisma/client";

interface IcreateUseCaseDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string ;
}

interface IAuthUserDTO {
    email: string,
    password: string
}
interface ICreateAdminDTO {
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
}

interface IUpdateAdminDTO {
    id: number,
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string | null;
}
interface IAdminRepositoryDTO {
    findAdminByEmail(name: string): Promise<Admin | null>
    create(data: ICreateAdminDTO): Promise<Admin>
    findById(id: number): Promise<Admin | null>
    findAll(): Promise<Admin[] | null>
    delete(id: number): Promise<boolean>
    update(data: IUpdateAdminDTO): Promise<Admin>
}

export { IAdminRepositoryDTO, ICreateAdminDTO, IcreateUseCaseDTO, IAuthUserDTO, IUpdateAdminDTO }