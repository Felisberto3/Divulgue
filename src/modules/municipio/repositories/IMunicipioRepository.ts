import { Municipio } from "@prisma/client";
import { IUpdateAdminDTO } from "../../admin/repositories/IAdminRepository";

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

interface IMunicipioUpdateDTO {
    id: number;
    name: string;
    administrationId: number;
    provinciaId: number;
}
interface IMunicipioRepositoryDTO {
    findMunicipioByName(name: string): Promise<Municipio | null>
    create(data: ICreateMunicipioDTO): Promise<Municipio>
    findById(id: number): Promise<Municipio | null>
    update({ administrationId,id,name,provinciaId}: IMunicipioUpdateDTO): Promise<Municipio>
    findAll(): Promise<Municipio[] | null>
    delete(id: number): Promise<boolean>
}

export { IMunicipioRepositoryDTO, ICreateMunicipioDTO, IcreateUseCaseDTO, IMunicipioUpdateDTO }