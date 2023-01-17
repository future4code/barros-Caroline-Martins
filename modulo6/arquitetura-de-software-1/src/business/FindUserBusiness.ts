import { UserDataBase } from "../data/UserDatabase";

export class FindUserBusiness {

    findUser = async (): Promise<void> => {
        try {

            const userDataBase = new UserDataBase()

            await userDataBase.findUser()

        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}