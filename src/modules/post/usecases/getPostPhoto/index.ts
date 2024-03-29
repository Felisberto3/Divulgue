import { PostRepository } from "../../repositories/implements/PostRepository"
import { GetPostPhotoController } from "./GetPostPhotoController"
import { GetPostPhotoUseCase } from "./GetPostPhotoUseCase"


const postRepository = new PostRepository()
const getPostPhotoUseCase = new GetPostPhotoUseCase(postRepository)
const getPostPhoto =  new GetPostPhotoController(getPostPhotoUseCase)

export  { getPostPhoto }