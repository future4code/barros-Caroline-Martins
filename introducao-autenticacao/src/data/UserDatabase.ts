import { CustomError } from "../error/customError";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public findUserByEmail = async (email:string) => {
        try {
         const result = await UserDatabase.connection("Auth_users").select().where({email})    
         
          return result[0]
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      };
}