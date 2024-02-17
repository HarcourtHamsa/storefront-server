import { NextFunction, Request, Response } from "express";
import UserService from "../../services/users/user-service";

async function getMe(req: Request, res: Response, next: NextFunction) {

    const { userId } = req.session as any

    const userService = new UserService()

    try {

        console.log("Request from ip: ", req.ip);
    
        // get users
        const user = await userService.getUser({ id: userId })

        return res.json({
            message: "Data retrieved",
            data: user
        })

    } catch (error) {
        next(error)
    }
}

export default getMe