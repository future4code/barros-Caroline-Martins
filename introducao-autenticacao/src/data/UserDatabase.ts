import { CustomError } from "../error/customError";
import { UserDTO } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public createUser = async (user: UserDTO) => {
        try {
          await UserDatabase.connection
            .insert({
              id: user.id,
              email: user.email,
              password: user.password,
            })
            .into("authentication_user");
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      };
}