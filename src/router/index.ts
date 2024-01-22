import { Router } from "express";
import { userRouter } from "./user.routes";
import { provinciaRouter } from "./provincia.routes";
import { municipioRouter } from "./municipio.routes";
import { administrationsRouter } from "./administrations.routes";
import { adminRouter } from "./admin.routes";

const router = Router()

router.use('/api',userRouter)
router.use('/api',provinciaRouter)
router.use('/api',municipioRouter)
router.use('/api',administrationsRouter)
router.use('/api',adminRouter)

export { router }