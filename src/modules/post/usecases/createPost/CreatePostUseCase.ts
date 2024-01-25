import { ICreatePostDTO } from "../../repositories/IPost"
import { PostRepository } from "../../repositories/implements/PostRepository"


class CreatePostUseCase {
    constructor( private postRepository: PostRepository) { }

    async execute({ administrationId,desc,userId,img}: ICreatePostDTO) {
        
        return await  this.postRepository.create({ administrationId,desc,userId,img})
      
    }
}

export {CreatePostUseCase }