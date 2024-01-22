import { MunicipioRepository } from "../../../municipio/repositories/implements/MunicipioRepository"
import { UserRepository } from "../../repositories/implements/UserRepository"
import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const municipioRepository = new MunicipioRepository()
const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository,municipioRepository)
const createUser =  new CreateUserController(createUserUseCase)

export  { createUser }