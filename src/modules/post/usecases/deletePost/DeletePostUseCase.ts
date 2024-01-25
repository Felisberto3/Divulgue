import { PostRepository } from "../../repositories/implements/PostRepository";

class DeletePostUseCase {
    constructor(
        private postRepository: PostRepository
        ) {  }

    async execute(id: number,userId:number){

        const postTodelete = await this.postRepository.findById(id)

        if (!postTodelete) {
            return true
        }

        if (postTodelete.userId !== userId) {
            throw new Error("Only the owner may not delete this post");
        }

        return await this.postRepository.delete(id)
    }
}

export { DeletePostUseCase }