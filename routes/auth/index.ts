import express from "express"
const router = express.Router()

import register from "../auth/register"
import login from '../auth/login'

router.use(register)
router.use(login)

export default router