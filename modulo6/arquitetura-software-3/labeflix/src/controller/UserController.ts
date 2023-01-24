import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input: UserInputDTO = {
        email: email,
        name: name,
        password: password
      }
      const userBusiness = new UserBusiness();

      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

  getAllUser = async (req: Request, res: Response) => {
    try {

      const userBusiness = new UserBusiness()

      const users = await userBusiness.getAllUser()

      res.status(200).send(users)

    } catch (e: any) {
      res.status(e.statusCode || 400).send(e.message || e.sqlMessage)
    }

  }
}
