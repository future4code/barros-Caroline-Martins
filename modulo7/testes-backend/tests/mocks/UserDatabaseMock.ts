import { UserResository } from "../../src/business/UserRepository";
import { User } from "../../src/model/User";
import { userMock } from "./UserMock";

export class UserDatabaseMock implements UserResository{

   public async createUser(user: User): Promise<void> {}

    public async getUserById(id: string): Promise<User | undefined> {
        return id === "id" ? userMock : undefined
    }
 

}