import { UserRepository } from "../../repositories/implements/UserRepository"
import { DeleteUserController } from "./DeleteUserController"
import { DeleteUserUseCase } from "./DeleteUserUseCase"


const userRepository = new UserRepository()
const deleteUserUseCase = new DeleteUserUseCase(userRepository)
const deleteUser =  new DeleteUserController(deleteUserUseCase)

export  { deleteUser }