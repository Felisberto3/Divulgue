import { AdministrationsRepository } from "../../../administration/repositories/implements/AdministrationsRepository";
import { ProvinciaRepository } from "../../../provincia/repositories/implements/ProvinciaRepository";
import { MunicipioRepository } from "../../repositories/implements/MunicipioRepository";
import { CreateMunicipioController } from "./CreateMunicipioController";
import { CreateMunicipioUseCase } from "./CreateMunicipioUseCase";

const municipioRepository = new MunicipioRepository()
const provinciaRepository = new ProvinciaRepository()
const administrationsRepository = new AdministrationsRepository()
const createMunicipioUseCase = new CreateMunicipioUseCase(municipioRepository,provinciaRepository,administrationsRepository)
const createMunicipio = new CreateMunicipioController(createMunicipioUseCase)

export { createMunicipio }