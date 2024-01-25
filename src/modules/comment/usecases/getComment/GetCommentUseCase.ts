import { CommentRepository } from "../../repositories/implements/CommentRepository";

class GetCommentUseCase {
    constructor(
        private CommentRepository: CommentRepository,
        ) { }

    async execute(id: number) {
        
        if (!id ) {
            return await this.CommentRepository.findAll()
        }

            return await this.CommentRepository.findById(id)

    }
}

export {GetCommentUseCase }