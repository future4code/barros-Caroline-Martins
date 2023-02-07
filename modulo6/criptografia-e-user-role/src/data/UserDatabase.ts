import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUser = async (email: string) => {
    try {
  
      const result = await UserDatabase.connection
        .select()
        .where({email})
        .from("Cripto_user")

      
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert(user)
        .into("Cripto_user");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into("Cripto_user");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async(id: string): Promise<any> => {
    const result = await UserDatabase.connection
      .select("*")
      .from("Cripto_user")
      .where({ id });
 
    return result[0];
   }
 
}
