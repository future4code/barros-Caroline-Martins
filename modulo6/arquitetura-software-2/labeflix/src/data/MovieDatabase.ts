import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";

    create =async ({id,title,description,duration_in_minutes,year_of_release}:any)=>{
        try{
            // await MovieDatabase.connection.raw(`
            // insert into ${MovieDatabase.TABLE_NAME} (id, title, description, duration_in_minutes, year_of_release)
            // values ${id, title, description, durationInMinutes,yearOfRelease}
            
            // `)
            // await MovieDatabase.connection
            // .insert({
            //     id: id,
            //     title: title,
            //     description: description,
            //     duration_in_minutes: durationInMinutes,
            //     year_of_release: yearOfRelease

            // }).into(MovieDatabase.TABLE_NAME)

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
}