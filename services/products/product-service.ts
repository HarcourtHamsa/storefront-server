import ProductRepository from "../../repositories/products/product-repository";
import UserRepository from "../../repositories/users/users-repository";
import { ProductInterface } from "../../types/product";
import { UserInterface } from "../../types/user";

class ProductService {
    private productRepository: ProductRepository

    constructor() {
        this.productRepository = new ProductRepository()
    }

    async getProduct(query: Record<string, any>) {
        return await this.productRepository.getProduct(query)
    }

    async deleteProduct(query: Record<string, any>) {
        return (await this.productRepository.deleteProduct(query))
    }

    async updateProduct(id: string, product: Partial<ProductInterface>) {
        return await this.productRepository.updateProduct(id, product)
    }

    // async softDeleteUser(query: Record<string, any>){
    //     return (await this.productRepository.softDeleteUser(query))
    // }

    async getProducts() {
        return await this.productRepository.getProducts()
    }

    async getStoreProducts(store: string) {
        return await this.productRepository.getProducts({ store })
    }

    async createProduct(product: ProductInterface) {
        return await this.productRepository.createProduct(product)
    }
}

export default ProductService