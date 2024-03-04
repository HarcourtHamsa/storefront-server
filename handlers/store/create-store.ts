import { NextFunction, Request, Response } from "express";
import { getUser } from "../../utils/user";
import StoreService from "../../services/store/store-service";

async function createStore(req: Request, res: Response, next: NextFunction) {
    const { name, category } = req.body
    const { userId } = getUser(req)

    const storeService = new StoreService()

    console.log("Request from ip: ", req.ip);

    try {
        const store = await storeService.createStore({
            name,
            category,
            owner_id: userId
        })

        return res.json({
            message: "Store created",
            data: store
        })

    } catch (error) {
        next(error)
    }
}

export default createStore