import { NextFunction, Request, Response } from "express";
import UserService from "../../services/users/user-service";

async function getUsers(req: Request, res: Response, next: NextFunction) {

    const userService = new UserService()

    try {

        console.log("Request from ip: ", req.ip);

        // get users
        const users = await userService.getUsers()

        return res.json({
            message: "Users retrieved successfully",
            data: users
        })

    } catch (error) {
        next(error)
    }
}

export default getUsers