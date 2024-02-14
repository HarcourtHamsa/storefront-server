import express from "express"
const router = express.Router()

import authRoutes from "./auth"

router.use(authRoutes)

export default router