import { Post } from "@prisma/client";
import { ICreatePostDTO, IPostRepositoryDTO, IUpdatePostDTO } from "../IPost";
import { prisma } from "../../../../prisma";

class PostRepository implements IPostRepositoryDTO {
    constructor() { }
 
    async create(data: ICreatePostDTO): Promise<Post>{
        return await prisma.post.create({ data })
    }


    async findAll(): Promise<Post[]> {
        return await prisma.post.findMany()
    }

    async findById(id: number): Promise<Post | null > {
        if (!id) return  null
        return await prisma.post.findFirst({ where: {id}})
    }


    async delete(id: number): Promise<boolean> {
        await prisma.post.delete({ where: { id }})
        return true
    }

    async update(id:number,data: IUpdatePostDTO): Promise<Post > {
        return await prisma.post.update({
            where:{ id },
            data
        })
    }
    
     
}

export { PostRepository }