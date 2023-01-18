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

    findUser = async (req: Request, resp: Response): Promise<void> => {
        try {

            const userDatabase = new UserBusiness()

            const users = await userDatabase.findUser()

            resp.status(200).send(users)

        } catch (e: any) {
            resp.status(200).send(e.message)
        }
    }

    deleteUser = async (req: Request, resp: Response): Promise<void> => {
        try {

            const id = { id: req.params.id }

            const userDelete = new UserBusiness()

            await userDelete.deleteUser(id)

            resp.status(200).send("Usuario deletado!")

        } catch (err: any) {
            resp.status(404).send(err.message)
        }
    }
}