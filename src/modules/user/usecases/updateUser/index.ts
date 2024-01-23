import { UserRepository } from "../../repositories/implements/UserRepository"
import { UpdateUserController } from "./UpdateUserController"
import { UpdateUserUseCase } from "./UpdateUserUseCase"


const userRepository = new UserRepository()
const updateUserUseCase = new UpdateUserUseCase(userRepository)
const updateUser =  new UpdateUserController(updateUserUseCase)

export  { updateUser }