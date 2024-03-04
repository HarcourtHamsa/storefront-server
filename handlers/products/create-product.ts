import { NextFunction, Request, Response } from "express";
import CustomError from "../../utils/error";
import ProductService from "../../services/products/product-service";
import StoreService from "../../services/store/store-service";

async function createProduct(req: Request, res: Response, next: NextFunction) {
    const {
        name,
        quantity,
        price,
        description,
    } = req.body

    const { store } = req.query

    const productService = new ProductService()
    const storeService = new StoreService()

    try {

        console.log("Request from ip: ", req.ip);

        const existingStore = await storeService.getStore({ id: store })

        if (!existingStore) {
            throw new CustomError("Store does not exist", 400);
        }

        const createdStore = await productService.createProduct({
            name,
            quantity,
            price,
            description,
            store: store as string ,
        })

        return res.json({
            data: createdStore
        })

    } catch (error) {
        next(error)
    }
}

export default createProduct