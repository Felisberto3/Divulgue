import { UserRepository } from "../../repositories/implements/UserRepository"
import { GetUserPhotoController } from "./GetUserPhotoController"
import { GetUserPhotoUseCase } from "./GetUserUserPhotoCase"


const userRepository = new UserRepository()
const getUserPhotoUseCase = new GetUserPhotoUseCase(userRepository)
const getUserPhoto =  new GetUserPhotoController(getUserPhotoUseCase)

export  { getUserPhoto }