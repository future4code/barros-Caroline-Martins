import { UserDataBase } from "../data/UserDatabase";

export class UserBusiness {
    createUser = async (input: any): Promise<void> => {

        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error("Body invalido! verifique name, email, password.");
            }
            const userDatabase = new UserDataBase()

            await userDatabase.createUser({
                name,
                email,
                password
            })

        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    findUser = async () => {
        try {

            const userDataBase = new UserDataBase()

            const user = await userDataBase.findUser()
            return (user)

        } catch (e: any) {
            throw new Error(e.message);
        }
    }


    deleteUser = async (id: any): Promise<void> => {

        try {
            if (!id) {
                throw new Error("Precisa passar id usuário.")
            }

            const deleteDatabase = new UserDataBase()

            await deleteDatabase.deleteUser(id)

        } catch (e: any) {
            throw new Error(e.message);
        }
    }

}