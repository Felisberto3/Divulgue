import { PostRepository } from "../../repositories/implements/PostRepository"

class GetPostPhotoUseCase {
    constructor(
        private PostRepository: PostRepository
        ) {  }

    async execute(id: number){
        if (!id) {
           throw new Error("Post id not provided");
        }

        return await this.PostRepository.findById(id)
    }
}

export { GetPostPhotoUseCase }