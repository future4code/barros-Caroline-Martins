import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import { LoginInputDTO } from "../model/types";
import { Authenticator } from "../services/authenticator";
import generateId from "../services/generateId";

const idGenerate =  generateId()

const authenticator = new Authenticator()

export class UserBusiness{

    public  login = async (input: LoginInputDTO) => {
        try {
          const {email, password } = input;
    
          if (!email || email.indexOf("@")) {
            throw new CustomError(
              400, 'Preencha os campos "email" e "password"'
            );
          }
          if (!password || password.length < 6) {
            throw new Error("Invalid password");
          }
      
    
          const userDatabase = new UserDatabase();
    
         const user = await userDatabase.findUserByEmail(email);
          
          const token = authenticator.generateToken({id: user.id})
    
          return token
    
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      };
}
