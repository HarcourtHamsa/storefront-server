import express from "express"
import getUsers from "../../handlers/user/get-users"
import checkAuth from "../../middlewares/check-auth"

const router = express.Router()

router.get("/users", checkAuth,getUsers)

export default router