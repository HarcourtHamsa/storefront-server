import { NextFunction, Request, Response } from "express";
import { getUser } from "../../utils/user";
import StoreService from "../../services/store/store-service";

async function getStores(req: Request, res: Response, next: NextFunction) {
    const { userId } = getUser(req)

    const {
        owner_id = userId
    } = req.query


    const storeService = new StoreService()

    console.log("Request from ip: ", req.ip);

    try {
        const stores = await storeService.getStores({
            owner_id,
        })

        return res.json({
            message: "Store retrieved",
            data: stores
        })

    } catch (error) {
        next(error)
    }
}

export default getStores