import { UserDataBase } from "../data/UserDatabase";

export class FindUserController {

    findUser = async (): Promise<void> => {
        try {

            const findUser = new UserDataBase()

            await findUser.findUser()

        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}