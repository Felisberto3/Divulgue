import { AdminRepository } from "../../repositories/implements/AdminRepository";
import { AuthAdminController } from "./authAdminController";
import { AuthAdminUseCase } from "./authAdminUseCase";

const adminRepository = new AdminRepository()
const authAdminUseCase = new AuthAdminUseCase(adminRepository)
const authAdmin = new AuthAdminController(authAdminUseCase)

export { authAdmin }