import express from "express"
import getUsers from "../../handlers/user/get-users"

const router = express.Router()

router.get("/users", getUsers)

export default router