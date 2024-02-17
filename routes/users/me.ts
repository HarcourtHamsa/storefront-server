import express from "express"
import checkAuth from "../../middlewares/check-auth"
import getMe from "../../handlers/user/me"

const router = express.Router()

router.get("/me", checkAuth, getMe)

export default router