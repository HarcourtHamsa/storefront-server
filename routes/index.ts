import express from "express"
const router = express.Router()

import authRoutes from "./auth/index"
import usersRoutes from "./users/index"
import storesRoutes from "./store/index"
import productRoutes from "./products/index"

router.use(authRoutes)
router.use(usersRoutes)
router.use(storesRoutes)
router.use(productRoutes)

export default router