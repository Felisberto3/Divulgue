import { PostRepository } from "../../../post/repositories/implements/PostRepository";
import { CommentRepository } from "../../repositories/implements/CommentRepository";

class DeleteCommentUseCase {
    constructor(
        private commentRepository: CommentRepository,
        private postRepository: PostRepository
        ) {  }

    async execute(id: number,userId:number){

        const CommentTodelete = await this.commentRepository.findById(id)
        
        if (!CommentTodelete) {
            return true
        }
        const post = await this.postRepository.findById(CommentTodelete.postId)

        if (CommentTodelete.userId !== userId && post?.userId !== userId) {
            throw new Error("Only the owner and the poster may not delete this Comment");
        }

        return await this.commentRepository.delete(id)
    }
}

export { DeleteCommentUseCase }