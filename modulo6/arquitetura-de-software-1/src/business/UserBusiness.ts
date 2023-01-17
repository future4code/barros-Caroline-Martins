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
}