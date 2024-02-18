import { NextFunction, Request, Response } from "express";
import UserService from "../../services/users/user-service";
import CustomError from "../../utils/error";
import CryptoService from "../../services/cyrpto/crypto-service";
import { Session } from "express-session";

interface CustomSession extends Session {
    userId;
}

async function login(req: Request, res: Response, next: NextFunction) {
    const {
        email_address,
        password,
    } = req.body

    const userService = new UserService()
    const cryptoService = new CryptoService()


    try {

        console.log("Request from ip: ", req.ip);

        // get user credentials
        const existingUserAccount = await userService.getUser({ email_address })


        if (!existingUserAccount) {
            throw new CustomError("Account does not eist", 400);
        }

        // check if password is correct
        const isPasswordCorrect = await cryptoService.comparePassword(password, existingUserAccount.password)

        if (!isPasswordCorrect) {
            throw new CustomError("Invalid credentials", 400);
        }

        (req.session as CustomSession).userId = existingUserAccount.id

        req.session.save((error) => {
            if (error) {
                console.log("Error saving session: ", error)
            } else {
                console.log("Session saved")
            }
        })

        return res.send({
            message: "Login successful",
            data: existingUserAccount
        })

    } catch (error) {
        next(error)
    }
}

export default login