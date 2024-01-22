import { MunicipioRepository } from "../../repositories/implements/MunicipioRepository"
import { DeleteMunicipioController } from "./DeleteMunicipioController"
import { DeleteMunicipioUseCase } from "./DeleteMunicipioUseCase"



const municipioRepository = new MunicipioRepository()
const deleteMunicipioUseCase = new DeleteMunicipioUseCase(municipioRepository)
const deleteMunicipio =  new DeleteMunicipioController(deleteMunicipioUseCase)

export  { deleteMunicipio }