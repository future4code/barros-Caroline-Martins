import { MovieDatabase } from "../data/MovieDatabase";

export class MovieBusiness{
    create = async(input:any):Promise<void>=>{
        try{
          
            if(!input.title || !input.description || !input.durationInMinutes || !input.yearOfRelease){
                throw new Error("Body incorreto verificar (title,  description, durationInMinutes, yearOfRelease) ");
                
            }
            const id:string= Date.now().toString()

            const movieDatabase = new MovieDatabase()

            await movieDatabase.create({
                id,
                title:input.title,
                description:input.description,
                duration_in_minutes:input.durationInMinutes,
                year_of_release:input.yearOfRelease
            })


        }catch(e:any){
            throw new Error(e.message);
            
        }
    }
}