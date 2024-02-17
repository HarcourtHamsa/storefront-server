import express from "express"
import logout from "../../handlers/auth/logout";
const router = express.Router()


router.post("/auth/logout", logout)

export default router