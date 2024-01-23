import { MunicipioRepository } from "../../repositories/implements/MunicipioRepository"
import { UpdateMunicipioController } from "./UpdateMunicipioController"
import { UpdateMunicipioUseCase } from "./UpdateUserUseCase"




const municipioRepository = new MunicipioRepository()
const updateMunicipioUseCase = new UpdateMunicipioUseCase(municipioRepository)
const updateMunicipio =  new UpdateMunicipioController(updateMunicipioUseCase)

export  { updateMunicipio }