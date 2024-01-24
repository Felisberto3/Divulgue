import { Comment } from "@prisma/client";

interface ICreateCommentDTO {
    desc: string;
    img?: string;
    postId: number;
    administratonId: number;
    userId: number;
}

interface IUpdateCommentDTO {
    desc: string;
    img?: string ;
    administratonId: number;
}

interface ICommentRepositoryDTO {
    create(data: ICreateCommentDTO): Promise<Comment>
    findAll(): Promise<Comment[]>
    update(id:number,data: IUpdateCommentDTO): Promise<Comment >
    findById(id:number): Promise<Comment | null>
    delete(id: number): Promise<boolean> 
}

export { ICommentRepositoryDTO,ICreateCommentDTO,IUpdateCommentDTO}