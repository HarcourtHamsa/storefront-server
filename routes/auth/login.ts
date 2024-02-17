import express, { NextFunction, Request, Response } from "express"
const { validationResult } = require('express-validator');
import register from "../../handlers/auth/register"
import { body } from "express-validator";
import login from "../../handlers/auth/login";
const router = express.Router()

const validateRequest = () => {    
    return [
        body("email_address").notEmpty().withMessage("Email address is required"),
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

router.post("/auth/login", validateRequest(), login)

export default router