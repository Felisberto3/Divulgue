import { UserRepository } from "../../repositories/implements/UserRepository"
import { GetUserController } from "./GetUserController"
import { GetUserUseCase } from "./GetUserUseCase"

const userRepository = new UserRepository()
const getUserUseCase = new GetUserUseCase(userRepository)
const getUser =  new GetUserController(getUserUseCase)

export  { getUser }