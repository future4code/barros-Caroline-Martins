import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const users = new UserDatabase()

        await users.createUser(Date.now().toString(), email, password)

        res.status(201).send(`User created successfully`)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
