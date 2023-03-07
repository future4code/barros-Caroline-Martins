import { User } from "../model/User";

export interface UserResository {
    createUser(user: User): Promise<void>
    
    getUserById(id: string): Promise<User | undefined>

}