import { PostRepository } from "../../../post/repositories/implements/PostRepository"
import { CommentRepository } from "../../repositories/implements/CommentRepository"
import { DeleteCommentController } from "./DeleteCommentController"
import { DeleteCommentUseCase } from "./DeleteCommentUseCase"



const postRepository= new PostRepository()
const commentRepository = new CommentRepository()
const deleteCommentUseCase = new DeleteCommentUseCase(commentRepository,postRepository)
const deleteComment =  new DeleteCommentController(deleteCommentUseCase)

export  { deleteComment }