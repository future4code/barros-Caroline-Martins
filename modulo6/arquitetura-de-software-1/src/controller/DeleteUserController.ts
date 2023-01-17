import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDatabase";

export class DeleteUserController{

    deleteUser = async(req: Request,resp:Response)=>{
        try{

            const id = { id: req.params.id}
            
            const userDelete = new UserDataBase()

            await userDelete.deleteUser(id)

            resp.status(200).send("Usuario deletado!")

        }catch(err:any){
            resp.status(404).send(err.message)
        }
    }
}