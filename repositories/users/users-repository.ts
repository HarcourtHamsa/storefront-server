import model  from "../../models";
import { UserInterface, UserStatus } from "../../types/user";

class UserRepository {
    constructor() { }

    async getUser(query: Record<string, any>) {
        return await model.User.findOne({ where: query })
    }

    async deleteUser(query: Record<string, any>) {
        return (await model.User.findOne({ where: query })).destroy()
    }

    async softDeleteUser(query: Record<string, any>) {
        return (await model.User.findOne({ where: query })).update({ status: UserStatus.DELETED })
    }

    async getUsers() {
        return await model.User.findAll()
    }

    async createUser(user: UserInterface) {
        const createdUser =  await model.User.create({...user})
        return createdUser
    }
}

export default UserRepository