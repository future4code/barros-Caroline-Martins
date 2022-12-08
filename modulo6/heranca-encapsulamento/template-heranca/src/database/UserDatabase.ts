import { User } from "../models/User";
import { BaseDatabase} from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public static TABLE_USERS = "Labe_Users"

    

    public async getAllUsers(){
       const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select()

       return result
       
    }
    public createUser= async (id:string, email:string, password: string)=> {
      const newUser = await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert({
        id,
        email,
        password
    })
      console.log(newUser);
      return newUser
      
    }

    public getUserById(){

    }
}