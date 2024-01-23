import { AdminRepository } from "../../../admin/repositories/implements/AdminRepository";
import { ProvinciaRepository } from "../../repositories/implements/ProvinciaRepository";
import { CreateProvinciaController } from "./CreateProvinciaController";
import { CreateProvinciaUseCase } from "./CreateProvinciaUseCase";

const adminRepository= new AdminRepository()
const provinciaRepository = new ProvinciaRepository()
const createProvinciaUseCase = new CreateProvinciaUseCase(provinciaRepository,adminRepository)
const createProvincia = new CreateProvinciaController(createProvinciaUseCase)

export { createProvincia }