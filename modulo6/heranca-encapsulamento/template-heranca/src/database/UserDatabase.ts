import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labe_Users"


  public async getAllUsers() {
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select()

    return result

  }

  public createUser = async (id: string, email: string, password: string) => {
    const newUser = await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert({
      id,
      email,
      password
    })
    return newUser

  }

  public getUserById = async (id: string) => {
    const userId = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ id })

    return userId
  }
}