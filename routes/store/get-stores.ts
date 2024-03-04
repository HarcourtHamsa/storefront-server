import express from "express"
import checkAuth from "../../middlewares/check-auth"
import { validationResult } from "express-validator"
import getStores from "../../handlers/store/get-stores"

const router = express.Router()

const validateRoute = () => {
    return [
        (req, res, next) => {
            const errors = validationResult(req)

            if (!errors.isEmpty) {
                return next({ error: errors.array })
            }

            next()
        }
    ]
}

router.get("/get-stores", checkAuth, getStores)

export default router