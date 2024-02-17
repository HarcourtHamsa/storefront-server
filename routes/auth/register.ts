import express from "express"
import { validationResult } from 'express-validator';
import register from "../../handlers/auth/register"
import { body } from "express-validator";
const router = express.Router()

const validateRequest = () => {
    return [
        body("email_address").notEmpty().withMessage("Email address is required"),
        body("first_name").notEmpty().withMessage("First name is required"),
        body("last_name").notEmpty().withMessage("Last name is required"),
        body("password").notEmpty().withMessage("Password is required"),
    
        (req, res, next) => {
            const errors = validationResult(req)
    
            if (!errors.isEmpty()) {
                return next(errors.array())
            }
    
            next()
        }
    ]
}

router.post("/auth/register", validateRequest(), register)

export default router