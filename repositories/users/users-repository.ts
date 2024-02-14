import User from "../../models/user";
import { UserInterface, UserStatus } from "../../types/user";

class UserRepository{
    constructor(){}

    async getUser(query: Record<string, any>){
        return await User.findOne(query)
    }

    async deleteUser(query: Record<string, any>){
        return (await User.findOne(query)).destroy()
    }

    async softDeleteUser(query: Record<string, any>){
        return (await User.findOne(query)).update({status: UserStatus.DELETED})
    }

    async getUsers(){
        return await User.findAll()
    }

    async createUser(user: UserInterface){
        return await User.create({...user})
    }
}

export default UserRepository