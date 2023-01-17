import { UserDataBase } from "../data/UserDatabase";

export class DeleteUserBusiness{

    deleteUser = async(id:string):Promise<void>=>{

        try{
            if(!id){
                throw new Error("Precisa passar id usuário.")
            }

            const deleteDatabase = new UserDataBase()

            await deleteDatabase.deleteUser(id)

        }catch(e:any){
            throw new Error(e.message);
        }
    }
}