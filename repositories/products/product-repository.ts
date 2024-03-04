import model from "../../models";
import { ProductInterface } from "../../types/product";

class ProductRepository {
    constructor() { }

    async getProduct(query: Record<string, any>) {
        return await model.Products.findOne({ where: query }, { raw: true })
    }

    async deleteProduct(query: Record<string, any>) {
        return (await model.Products.findOne({ where: query })).destroy()
    }

    async updateProduct(id: string, product: Partial<ProductInterface>) {
        return (await model.Products.update({ ...product }, { where: { id: id } }, { raw: true }))
    }

    async getProducts(query?: Record<string, any>) {
        console.log({ query })
        return await model.Products.findAll({ where: query, raw: true })
    }

    async createProduct(product: ProductInterface) {
        return await model.Products.create({ ...product })
    }
}

export default ProductRepository