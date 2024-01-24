import { CommentRepository } from "../../repositories/implements/CommentRepository"
import { UpdateCommentController } from "./UpdateCommentController"
import { UpdateCommentUseCase } from "./UpdateCommentUseCase"



const commentRepository = new CommentRepository()
const updateCommentUseCase = new UpdateCommentUseCase(commentRepository)
const updateComment =  new UpdateCommentController(updateCommentUseCase)

export  { updateComment }