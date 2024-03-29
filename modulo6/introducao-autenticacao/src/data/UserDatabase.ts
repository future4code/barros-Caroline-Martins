import { CustomError } from "../error/customError";
import { UserDTO } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
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

    public getUserByEmail = async (email: string): Promise<any> => {
        const result = await UserDatabase.connection
            .select("*")
            .from("authentication_user")
            .where({ email });

        return result[0];
    }

    public getUserById = async (id: string): Promise<any> => {
        const result = await UserDatabase.connection
            .select("*")
            .from("authentication_user")
            .where({ id:id });

        return result[0];
    }

}
