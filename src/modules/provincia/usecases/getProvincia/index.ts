import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository";
import { GetProvinciaController } from "./GetProvinciaController";
import { GetProvinciaUseCase } from "./GetProvinciaUseCase";

const provinciaRepository = new ProvinciaRepository()
const getProvinciaUseCase = new GetProvinciaUseCase(provinciaRepository)
const getProvincia = new GetProvinciaController(getProvinciaUseCase)

export { getProvincia }