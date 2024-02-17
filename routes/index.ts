import express from "express"
const router = express.Router()

import authRoutes from "./auth/index"
import usersRoutes from "./users/index"

router.use(authRoutes)
router.use(usersRoutes)

export default router