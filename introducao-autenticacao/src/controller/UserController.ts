import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/types";


export class UserController {

    public signup = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: UserInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()

         const token = await userBusiness.signup(input);
          console.log(token);
          
          res.status(201).send({ "token": "token gerado pelo jwt"});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };  

       
      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input:  UserInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()

         const token = await userBusiness.login(input);
    console.log(token);
    
          res.status(200).send(input);

        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };  

}