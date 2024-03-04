import model from "../../models";
import { StoreInterface, StoreStatus } from "../../types/store";

class StoreRepository {
    constructor() { }

    async getStore(query: Record<string, any>) {
        console.log({ query });
        return await model.Store.findOne({ where: query })
    }

    async deleteStore(query: Record<string, any>) {
        return (await model.Store.findOne({ where: query })).destroy()
    }

    async softDeleteStore(query: Record<string, any>) {
        return (await model.Store.findOne({ where: query })).update({ status: StoreStatus.DELETED })
    }

    async getStores(query?: Record<string, any>) {
        return await model.Store.findAll({ where: query })
    }

    async createStore(data: StoreInterface) {
        const createdStore = await model.Store.create(data)
        return createdStore
    }
}

export default StoreRepository