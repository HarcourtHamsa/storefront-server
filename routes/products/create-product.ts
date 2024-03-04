import express from "express"
import { query, validationResult, body } from 'express-validator';
import createProduct from "../../handlers/products/create-product";

const router = express.Router()

const validateRequest = () => {
    return [
        query("store").notEmpty().withMessage("Store is required"),
        body("name").notEmpty().withMessage("Name is required"),
        body("quantity").notEmpty().withMessage("Quantity is required"),
        body("price").notEmpty().withMessage("Price is required"),
        body("description").notEmpty().withMessage("Description is required"),
    
        (req, res, next) => {
            const errors = validationResult(req)
    
            if (!errors.isEmpty()) {
                return next(errors.array())
            }
    
            next()
        }
    ]
}

router.post("/create-product", validateRequest(), createProduct)

export default router