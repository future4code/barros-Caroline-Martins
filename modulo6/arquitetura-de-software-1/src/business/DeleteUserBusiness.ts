import { UserDataBase } from "../data/UserDatabase";

export class DeleteUserBusiness{

    deleteUser = async(id:string):Promise<void>=>{

        try{
            if(!id){
                throw new Error("Precisa passar id usuário.")
            }

            const deleteUser = new UserDataBase()

            await deleteUser.deleteUser(id)

        }catch(e:any){
            throw new Error(e.message);
        }
    }
}