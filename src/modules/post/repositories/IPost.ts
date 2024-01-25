import { Post } from "@prisma/client";

interface ICreatePostDTO {
    desc: string;
    img?: string;
    administrationId: number;
    userId: number;
}

interface IUpdatePostDTO {
    desc?: string;
    img?: string;
    administrationId?: number;
    userId?: number;
}

interface IPostRepositoryDTO {
    create(data: ICreatePostDTO): Promise<Post>
    findAll(): Promise<Post[]>
    update(id:number,data: IUpdatePostDTO): Promise<Post >
    findById(id:number): Promise<Post | null>
    delete(id: number): Promise<boolean> 
}

export { IPostRepositoryDTO,ICreatePostDTO,IUpdatePostDTO }