import { BaseDatabase} from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public static TABLE_USERS = "Labe_Users"

    public async getAllUsers(){
       const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select()

       return result
       
    }
    // public async createUser(){
    //    const newUser = await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert({
    //     Date.now().toString();
    //     email;
    //     password;
    //     })
    // }

    public getUserById(){

    }
}