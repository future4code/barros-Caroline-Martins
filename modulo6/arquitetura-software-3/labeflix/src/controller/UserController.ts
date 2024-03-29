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
    } catch (err: any) {
      res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
    }
  }

  getAllUser = async (req: Request, res: Response) => {
    try {

      const userBusiness = new UserBusiness()

      const users = await userBusiness.getAllUser()

      res.status(200).send(users)

    } catch (err: any) {
      res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
    }

  }
}
