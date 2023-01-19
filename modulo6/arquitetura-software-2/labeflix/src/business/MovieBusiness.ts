import { MovieDatabase } from "../data/MovieDatabase";

export class MovieBusiness{
    create = async(input:any):Promise<void>=>{
        let erroCode=400
        try{
            const {title, description, durationInMinutes, yearOfRelease}= input

            if(!title || !description || !durationInMinutes || !yearOfRelease){
                erroCode = 400
                throw new Error("Body incorreto verificar (title,  description, durationInMinutes, yearOfRelease) ");
                
            }
            const id:string= Date.now().toString()
            const movieDatabase = new MovieDatabase()

            await movieDatabase.create({
                id,
                title,
                description, 
                durationInMinutes, 
                yearOfRelease
            })


        }catch(e:any){
            throw new Error(e.message);
            
        }
    }
}