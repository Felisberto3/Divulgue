import { User } from "@prisma/client"

interface ICreateUserDTO {
    email: string,
    firstName?: string,
    surName?: string,
    passwordHash: string,
    municipioId: number,
}

interface ICreateUseCaseDTO {
    email: string,
    firstName?: string,
    surName?: string,
    password: string,
    municipio: string,
}

interface IUpdateUserDTO {
    id: number,
    bornDate: string,
    email: string,
    firstName: string,
    surName: string,
    img: string,
    municipioId: number,
    passwordHash: string
}


interface IRepositoryDTO {
    create(data: ICreateUserDTO): Promise<User>
    findByEmail(email: string): Promise<User | null>
    findById(id: number | null): Promise<User | null>
    findAll(): Promise<User[]>
    update(data: IUpdateUserDTO): Promise<User>
    delete(id: number): Promise<boolean>
}

export { ICreateUserDTO, IRepositoryDTO, ICreateUseCaseDTO,IUpdateUserDTO }