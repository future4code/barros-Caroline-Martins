import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const users = new UserDatabase()
        
        const user = await users.createUser(
            Date.now().toString(),
            email,
            password
            )
            console.log(user);
            
        //   const result = await  users.createUser()

          res.status(201).send(user)
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

     // const newUser: User = {
        //     id: Date.now().toString(),
        //     email,
        //     password
        // }
    // const userNew = await  users.createUser(
    //     Date.now().toString(),
    //     email,
    //     password,
    // )

// await connection(TABLE_USERS).insert({
//     id: user.getId(),
//     email: user.getEmail(),
//     password: user.getPassword()
// })