import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {
    TABLE_NAME = "user_software"
    createUser = async (user: any): Promise<void> => {
        try {
            await UserDataBase.connection.insert({
                name: user.name,
                email: user.email,
                password: user.password
            }).into(this.TABLE_NAME)
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    findUser = async () => {
        try {
            const user = await UserDataBase.connection(this.TABLE_NAME).select()
            return (user)
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    deleteUser = async(id:any)=>{
        try{
        
            const userDelete = await UserDataBase.connection(this.TABLE_NAME)
            .delete()
            .where(id)

        }catch(e:any){
            throw new Error(e.message);
        }
    }

}