import { NextFunction, Request, Response } from "express";
import UserService from "../../services/users/user-service";
import CustomError from "../../utils/error";

async function register(req: Request, res: Response, next: NextFunction) {
    const {
        first_name,
        last_name,
        email_address,
        password,
        phone,
        status
    } = req.body

    const userService = new UserService()

    try {

        console.log("Request from ip: ", req.ip);

        // get user with existing email address
        const existingUserAccount = await userService.getUser({ email_address })

        if (existingUserAccount) {
            throw new CustomError("Email is already in use", 400);
        }

        const createdUserAccount = await userService.createUser({
            first_name,
            last_name,
            email_address,
            password,
            phone,
            status
        })

        return res.json({
            data: createdUserAccount
        })

    } catch (error) {
        next(error)
    }
}

export default register