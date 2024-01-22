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
interface IAdminRepositoryDTO {
    findAdminByEmail(name: string): Promise<Admin | null>
    create(data: ICreateAdminDTO): Promise<Admin>
    findById(id: number): Promise<Admin | null>
    findAll(): Promise<Admin[] | null>
}

export { IAdminRepositoryDTO, ICreateAdminDTO, IcreateUseCaseDTO, IAuthUserDTO }