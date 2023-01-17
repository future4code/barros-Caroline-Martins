import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    createUser = async (req: Request, resp: Response): Promise<void> => {

        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()

            await userBusiness.createUser(input)

            resp.status(201).send(`message: "Usuário criado!"`)
        } catch (e: any) {
            resp.status(400).send(e.message)
        }
    }
}