import { NextFunction, Request, Response } from "express";
import ProductService from "../../services/products/product-service";

async function getProductByID(req: Request, res: Response, next: NextFunction) {

    const { id } = req.query

    const productService = new ProductService()

    try {

        console.log("Request from ip: ", req.ip);

        const product = await productService.getProduct({id: id as string})

        return res.json({
            data: product
        })

    } catch (error) {
        next(error)
    }
}

export default getProductByID