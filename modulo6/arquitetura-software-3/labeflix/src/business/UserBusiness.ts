import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { UserInputDTO, UserInsertDTO } from "../model/userDTO"

export class UserBusiness {
  async create({ email, name, password }: UserInputDTO): Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()

    const createUser:UserInsertDTO={
      id,
      name,
      email,
      password
    }
    await userDatabase.create(createUser)
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
