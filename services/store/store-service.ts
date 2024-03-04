import StoreRepository from "../../repositories/store/store-repository";
import { StoreInterface } from "../../types/store";


class StoreService {
    private storeRepository: StoreRepository

    constructor() {
        this.storeRepository = new StoreRepository()
    }

    async getStore(query: Record<string, any>) {
        return await this.storeRepository.getStore(query)
    }

    async deleteStore(query: Record<string, any>) {
        return (await this.storeRepository.deleteStore(query))
    }

    async softDeleteStore(query: Record<string, any>) {
        return (await this.storeRepository.softDeleteStore(query))
    }

    async getStores(query?: Record<string, any>) {
        return await this.storeRepository.getStores(query)
    }

    async createStore(data: StoreInterface) {
        return await this.storeRepository.createStore(data)
    }
}

export default StoreService