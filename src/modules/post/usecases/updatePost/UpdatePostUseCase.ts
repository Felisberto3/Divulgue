import { IUpdatePostDTO } from "../../repositories/IPost"
import { PostRepository } from "../../repositories/implements/PostRepository"


class UpdatePostUseCase {
    constructor(
        private postRepository: PostRepository
        ) {  }

    async execute(id: number, data: IUpdatePostDTO){
        const postToUpdate = await this.postRepository.findById(id)

        if (!postToUpdate) {
            return true
        }

        if (postToUpdate.userId !== data.userId) {
            throw new Error("Only the owner may not Update this post");
        }

        return await this.postRepository.update(id,data)
    }
}

export { UpdatePostUseCase }