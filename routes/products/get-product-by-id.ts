import express from "express"
import { query, validationResult } from 'express-validator';
import getProductByID from "../../handlers/products/get-product-by-id";

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

router.get("/product-by-id", validateRequest(), getProductByID)

export default router