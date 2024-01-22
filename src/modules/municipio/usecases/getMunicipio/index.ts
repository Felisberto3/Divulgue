import { MunicipioRepository } from "../../repositories/implements/MunicipioRepository";
import { GetMunicipioController } from "./GetMunicipioController";
import { GetMunicipioUseCase } from "./GetMunicipioUseCase";

const municipioRepository = new MunicipioRepository()
const getMunicipioUseCase = new GetMunicipioUseCase(municipioRepository)
const getMunicipio = new GetMunicipioController(getMunicipioUseCase)

export { getMunicipio }