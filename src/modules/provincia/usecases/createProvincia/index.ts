import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository";
import { CreateProvinciaController } from "./CreateProvinciaController";
import { CreateProvinciaUseCase } from "./CreateProvinciaUseCase";

const provinciaRepository = new ProvinciaRepository()
const createProvinciaUseCase = new CreateProvinciaUseCase(provinciaRepository)
const createProvincia = new CreateProvinciaController(createProvinciaUseCase)

export { createProvincia }