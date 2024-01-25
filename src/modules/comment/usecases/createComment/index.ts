import { CommentRepository } from "../../repositories/implements/CommentRepository"
import { CreateCommentController } from "./CreateCommentController"
import { CreateCommentUseCase } from "./CreateCommentUseCase"


const commentRepository = new CommentRepository()
const createCommentUseCase = new CreateCommentUseCase(commentRepository)
const createComment = new CreateCommentController(createCommentUseCase)

export { createComment }