import { ICreateCommentDTO } from "../../repositories/IComment"
import { CommentRepository } from "../../repositories/implements/CommentRepository"


class CreateCommentUseCase {
    constructor( private commentRepository: CommentRepository) { }

    async execute({ administratonId,desc,postId,userId,img}: ICreateCommentDTO) {
        
        return await  this.commentRepository.create({ administratonId,desc,postId,userId,img})
      
    }
}

export {CreateCommentUseCase }