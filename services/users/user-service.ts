import UserRepository from "../../repositories/users/users-repository";
import { UserInterface } from "../../types/user";

class UserService {
    private userRepository: UserRepository

    constructor(){
        this.userRepository = new UserRepository()
    }

    async getUser(query: Record<string, any>){
        return await this.userRepository.getUser(query)
    }

    async deleteUser(query: Record<string, any>){
        return (await this.userRepository.deleteUser(query))
    }

    async softDeleteUser(query: Record<string, any>){
        return (await this.userRepository.softDeleteUser(query))
    }

    async getUsers(){
        return await this.userRepository.getUsers()
    }

    async createUser(user: UserInterface){
        return await this.userRepository.createUser(user)
    }
}

export default UserService