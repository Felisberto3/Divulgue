import { CommentRepository } from "../../repositories/implements/CommentRepository"
import { GetCommentController } from "./GetCommentController"
import { GetCommentUseCase } from "./GetCommentUseCase"

const commentRepository = new CommentRepository()
const getCommentUseCase = new GetCommentUseCase(commentRepository)
const getComment = new GetCommentController(getCommentUseCase)

export { getComment }