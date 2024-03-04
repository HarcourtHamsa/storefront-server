import { NextFunction, Request, Response } from "express";
import { getUser } from "../../utils/user";
import StoreService from "../../services/store/store-service";

async function getStoreByID(req: Request, res: Response, next: NextFunction) {
    const { store_id } = req.query
 
    const storeService = new StoreService()

    console.log("Request from ip: ", req.ip);

    try {
        const store = await storeService.getStore({
            id: store_id
        })

        return res.json({
            message: "Store retrieved",
            data: store
        })

    } catch (error) {
        next(error)
    }
}

export default getStoreByID