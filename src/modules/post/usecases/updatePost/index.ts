import { PostRepository } from "../../repositories/implements/PostRepository"
import { UpdatePostController } from "./UpdatePostController"
import { UpdatePostUseCase } from "./UpdatePostUseCase"



const postRepository = new PostRepository()
const updatePostUseCase = new UpdatePostUseCase(postRepository)
const updatePost =  new UpdatePostController(updatePostUseCase)

export  { updatePost }