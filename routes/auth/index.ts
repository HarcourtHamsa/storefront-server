import express from "express"
const router = express.Router()

import register from "../auth/register"
import login from '../auth/login'
import logout from '../auth/logout'

router.use(register)
router.use(login)
router.use(logout)

export default router