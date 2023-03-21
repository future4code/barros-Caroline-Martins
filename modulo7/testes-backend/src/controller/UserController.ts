import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
constructor(private userBusiness: UserBusiness ) {}

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await this.userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error:any) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getAllId(req: Request, res: Response) {
      try {
    const id = req.params.id as string
         const result = await this.userBusiness.allById(id);
         res.status(200).send(result);

      } catch (error:any) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

}