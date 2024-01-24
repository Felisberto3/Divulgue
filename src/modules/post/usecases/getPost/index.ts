import { PostRepository } from "../../repositories/implements/PostRepository"
import { GetPostController } from "./GetPostController"
import { GetPostUseCase } from "./GetPostUseCase"

const postRepository = new PostRepository()
const getPostUseCase = new GetPostUseCase(postRepository)
const getPost = new GetPostController(getPostUseCase)

export { getPost }