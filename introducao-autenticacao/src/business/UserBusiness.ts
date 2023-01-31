import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import {  UserDTO, UserInputDTO } from "../model/types";
import { Authenticator } from "../services/authenticator";
import generateId from "../services/generateId";

const idGenerate =  generateId()

const authenticator = new Authenticator()

export class UserBusiness{

    public  signup = async (input: UserInputDTO) => {
        try {
          const {email, password } = input;
    
          if (!email || email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
      
          if (!password || password.length < 6) {
            throw new Error("Invalid password");
          }
    
          const id = idGenerate
    
          const user: UserDTO = {
            id,
            email,
            password,
          };
          const userDatabase = new UserDatabase();

          await userDatabase.createUser(user);
          
          const token = authenticator.generateToken({id})
    
          return token
    
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      };

      public  login = async (input: UserInputDTO ) => {
        try {
          const {email, password } = input;
    
          if (!email || !password) {
            throw new CustomError(
              400,
              'Preencha os campos "email" e "password"'
            );
          }
    
          if (!email.includes("@")) {
            throw new CustomError(400, "Email inválida"); 
          }
    
          const userDatabase = new UserDatabase();
    
         const user = await userDatabase.getUserByEmail(email);
    
         if(!user){
            throw new CustomError(404, "User not found"); 
         }
    
         if(user.password !== password){
            throw new CustomError(400, "Senha inválida"); 
         }
    
          const token = authenticator.generateToken({id: user.id})
    
          return token
    
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      };
    
}
