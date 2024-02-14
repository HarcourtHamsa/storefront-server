import { NextFunction, Request, Response } from "express";
import UserService from "../../services/users/user-service";

async function register(req: Request, res: Response, next: NextFunction) {
    const {
        first_name,
        last_name,
        email_address,
        password,
    } = req.body

    const userService = new UserService()

    try {

        console.log("Request from ip: ", req.ip);
        
        // get user with existing email address
        const existingUserAccount = await userService.getUser({ email_address })

        if (existingUserAccount) {
            throw new Error("Email is already in use");
        }

        const createdUserAccount = await userService.createUser({
            first_name,
            last_name,
            email_address,
            password,
        })

        return res.json({
            data: createdUserAccount
        })

    } catch (error) {
        next(error)
    }
}

export default register