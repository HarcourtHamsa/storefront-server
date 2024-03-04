import express from "express"
import { query, validationResult } from 'express-validator';
import getStoreProducts from "../../handlers/products/get-store-products";

const router = express.Router()

const validateRequest = () => {
    return [
        query("store").notEmpty().withMessage("Store is required"),
        (req, res, next) => {
            const errors = validationResult(req)
    
            if (!errors.isEmpty()) {
                return next(errors.array())
            }
    
            next()
        }
    ]
}

router.get("/store-products", validateRequest(), getStoreProducts)

export default router