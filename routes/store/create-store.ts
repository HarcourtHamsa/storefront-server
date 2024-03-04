import express from "express"
import checkAuth from "../../middlewares/check-auth"
import createStore from "../../handlers/store/create-store"
import { body, validationResult } from "express-validator"

const router = express.Router()

const validateRoute = () => {
    return [
        body("name").notEmpty().withMessage("Name is required"),
        body("category").notEmpty().withMessage("Category is required"),
        
        (req, res, next) => {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return next(errors.array())
            }

            next()
        }
    ]
}

router.post("/create-store", checkAuth, validateRoute(), createStore)

export default router