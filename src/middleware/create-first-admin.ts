import {  Request, Response } from "express";
import { CreateAdminController } from "../modules/admin/usecases/createAdmin/CreateAdminController";
import { CreateAdminUseCase } from "../modules/admin/usecases/createAdmin/CreateAdminUseCase";
import { AdminRepository } from "../modules/admin/repositories/implements/AdminRepository";

const adminRepository = new AdminRepository()
const createAdminUseCase = new CreateAdminUseCase(adminRepository)
const createMainAdmin = new CreateAdminController(createAdminUseCase)

const createFirstAdmin = async (req:Request,res: Response) => {
    const adminExist = await adminRepository.findAll()
    if (!adminExist) {

        req.body = {
            email:"f@gmail.com",
            firstName:"Joao",
            lastName: 'Lourenço',
            password: '12345678'
        }
        
        return createMainAdmin.handle(req,res)
    }
}

export { createFirstAdmin }