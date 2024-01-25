import { PostRepository } from "../../repositories/implements/PostRepository";

class GetPostUseCase {
    constructor(
        private PostRepository: PostRepository,
        ) { }

    async execute(id: number) {
        
        if (!id ) {
            return await this.PostRepository.findAll()
        }

            return await this.PostRepository.findById(id)

    }
}

export {GetPostUseCase }