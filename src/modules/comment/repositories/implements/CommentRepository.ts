import { Comment } from "@prisma/client";
import { ICreateCommentDTO, ICommentRepositoryDTO, IUpdateCommentDTO } from "../IComment";
import { prisma } from "../../../../prisma";

class CommentRepository implements ICommentRepositoryDTO {
    constructor() { }
 
    async create(data: ICreateCommentDTO): Promise<Comment>{
        return await prisma.comment.create({ data })
    }


    async findAll(): Promise<Comment[]> {
        return await prisma.comment.findMany()
    }

    async findById(id: number): Promise<Comment | null > {
        if (!id) return  null
        return await prisma.comment.findFirst({ where: {id}})
    }


    async delete(id: number): Promise<boolean> {
        await prisma.comment.delete({ where: { id }})
        return true
    }

    async update(id:number,data: IUpdateCommentDTO): Promise<Comment > {
        return await prisma.comment.update({
            where:{ id },
            data
        })
    }
    
     
}

export { CommentRepository }