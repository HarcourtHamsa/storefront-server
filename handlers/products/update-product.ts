import { NextFunction, Request, Response } from "express";
import CustomError from "../../utils/error";
import ProductService from "../../services/products/product-service";
import { ProductInterface } from "../../types/product";

async function updateProduct(req: Request, res: Response, next: NextFunction) {
    const data = req.body as Partial<ProductInterface>
    const { id } = req.query

    const productService = new ProductService()

    try {

        console.log("Request from ip: ", req.ip);

        const existingProduct = await productService.getProduct({ id: id as string })

        if (!existingProduct) {
            throw new CustomError("Product does not exist", 400);
        }

        const updatedPoduct = await productService.updateProduct(id as string, data)

        return res.json({
            data: updatedPoduct
        })

    } catch (error) {
        next(error)
    }
}

export default updateProduct