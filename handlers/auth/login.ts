import { NextFunction, Request, Response } from "express";
import UserService from "../../services/users/user-service";
import CustomError from "../../utils/error";

async function login(req: Request, res: Response, next: NextFunction) {
    const {
        email_address,
        password,
    } = req.body

    const userService = new UserService()

    try {

        console.log("Request from ip: ", req.ip);

        // get user credentials
        const existingUserAccount = await userService.getUser({ email_address, password })

        if (existingUserAccount) {
            throw new CustomError("Account does not eist", 400);
        }

        return res.json({
            message: "Login successful",
            data: existingUserAccount
        })

    } catch (error) {
        next(error)
    }
}

export default login