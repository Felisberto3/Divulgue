import { IUpdateCommentDTO } from "../../repositories/IComment"
import { CommentRepository } from "../../repositories/implements/CommentRepository"


class UpdateCommentUseCase {
    constructor(
        private CommentRepository: CommentRepository
        ) {  }

    async execute(id: number,userId: number, data: IUpdateCommentDTO){
        const CommentToUpdate = await this.CommentRepository.findById(id)

        if (!CommentToUpdate) {
            throw new Error("Comment id not exist");
        }

        if (CommentToUpdate.userId !== userId) {
            throw new Error("Only the owner may not Update this Comment");
        }

        return await this.CommentRepository.update(id,data)
    }
}

export { UpdateCommentUseCase }