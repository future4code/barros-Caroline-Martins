import { CustomError } from "../error/CustomError";
import { UserInsertDTO } from "../model/userDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: UserInsertDTO): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  getAllUser = async () => {
    try {

      const result = await UserDatabase.connection.select().from(UserDatabase.TABLE_NAME)
      return (result)

    } catch (err: any) {
      throw new CustomError(err.statusCode, err.message)

    }
  }
}
