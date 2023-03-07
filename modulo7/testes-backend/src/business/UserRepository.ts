import { User } from "../model/User";

export interface UserResository {

    getUserById(id: string): Promise<User | undefined>

}