import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  async create({ email, name, password }: any): Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  getAllUser = async () => {
    try {


      const userDatabase = new UserDatabase()

     const users = await userDatabase.getAllUser()
     return(users)

    } catch (e: any) {
      throw new Error(e.message);

    }
  }

}
