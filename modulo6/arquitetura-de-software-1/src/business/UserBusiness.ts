import { BaseDatabase } from "../data/BaseDatabase";
import { UserDataBase } from "../data/UserDatabase";

export class UserBusiness extends BaseDatabase {
    createUser = async (input: any): Promise<void> => {

        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error("Body invalido! verifique name, email, password.");
            }

            if (password.length > 6) {
                throw new Error("Senha incorrect, password must be at least 6 characters");

            }

            const userDatabase = new UserDataBase()

            await userDatabase.insertUser({
                name,
                email,
                password
            })

        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}