import { Router, Request, Response } from "express";
import { createAdmin } from "../modules/admin/usecases/createAdmin";
import { getAdmin } from "../modules/admin/usecases/getAdmin";
import { authAdmin } from "../modules/admin/usecases/authAdmin";
import { deleteAdmin } from "../modules/admin/usecases/deleteAdmin";
import { createFirstAdmin } from "../middleware/create-first-admin";
import { currentUser } from "../middleware/current-user";
import { updateAdmin } from "../modules/admin/usecases/updateAdmin";



const adminRouter = Router()

adminRouter.get('/', async (req: Request, res: Response) => {
    return createFirstAdmin(req, res)
})

adminRouter.post('/create/admin', currentUser,async (req: Request, res: Response) => {
    return createAdmin.handle(req, res)
})

adminRouter.post('/auth/admin', async (req: Request, res: Response) => {
    return authAdmin.handle(req, res)
})

adminRouter.get('/get/admin/:id', async (req: Request, res: Response) => {
    return getAdmin.handle(req, res)
})
adminRouter.delete('/delete/admin/:id',currentUser, async (req: Request, res: Response) => {
    return deleteAdmin.handle(req, res)
})
adminRouter.put('/put/admin/',currentUser, async (req: Request, res: Response) => {
    return updateAdmin.handle(req, res)
})
export { adminRouter }