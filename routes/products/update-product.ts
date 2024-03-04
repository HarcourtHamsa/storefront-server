import express from "express"
import { query, validationResult } from 'express-validator';
import updateProduct from "../../handlers/products/update-product";

const router = express.Router()

const validateRequest = () => {
    return [
        query("id").notEmpty().withMessage("ID is required"),
        (req, res, next) => {
            const errors = validationResult(req)
    
            if (!errors.isEmpty()) {
                return next(errors.array())
            }
    
            next()
        }
    ]
}

router.patch("/update-product", validateRequest(), updateProduct)

export default router