import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const users = new UserDatabase()

        const result = await users.getAllUsers()

        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}