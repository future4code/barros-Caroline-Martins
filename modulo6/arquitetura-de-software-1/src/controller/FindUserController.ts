import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDatabase";

export class FindUserController {

    findUser = async (req: Request, resp: Response): Promise<void> => {
        try {

            const userDatabase = new UserDataBase()

            const users = await userDatabase.findUser()

            resp.status(200).send(users)

        } catch (e: any) {
            resp.status(200).send(e.message)
        }
    }
}