import express from "express"
const router = express.Router()

import register from "./register"

router.use(register)

export default router