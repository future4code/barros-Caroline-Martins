import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {
    insertUser = async (user: any): Promise<void> => {
        try {
            await UserDataBase.connection.insert({
                name: user.name,
                email: user.email,
                password: user.password
            }).into("user_software")
        } catch (e: any) {
            throw new Error(e.message);
        }
    }



}