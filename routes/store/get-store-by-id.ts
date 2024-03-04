import express from "express"
import checkAuth from "../../middlewares/check-auth"
import { query, validationResult } from "express-validator"
import getStoreByID from "../../handlers/store/get-store-by-id"

const router = express.Router()

const validateRoute = () => {
    return [
        query("store_id").notEmpty().withMessage("Store ID is required"),
        (req, res, next) => {
            const errors = validationResult(req)

            if (!errors.isEmpty) {
                return next({ error: errors.array })
            }

            next()
        }
    ]
}

router.get("/get-store-by-id", validateRoute(), checkAuth, getStoreByID)

export default router