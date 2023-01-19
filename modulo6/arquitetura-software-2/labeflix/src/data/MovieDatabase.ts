import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";

    create =async ({id,title,description,duration_in_minutes,year_of_release}:any)=>{
        try{

              await MovieDatabase.connection
            .insert({
                id,
                title,
                description,
                duration_in_minutes,
                year_of_release,

            }).into(MovieDatabase.TABLE_NAME)

        }catch(err:any){
            throw new Error(err.message);
        }

    }

    getAllMovie = async () => {
        try {
    
          const result = await MovieDatabase.connection.select().from(MovieDatabase.TABLE_NAME)
          return (result)
    
        } catch (e: any) {
          throw new Error(e.message);
    
        }
      }
}