import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_USER";

    create =async ({id, title, description, durationInMinutes,yearOfRelease }:any)=>{
        try{
            await MovieDatabase.connection
            .insert({
                id: id,
                title: title,
                description: description,
                duration_in_minutes: durationInMinutes,
                year_of_release: yearOfRelease

            }).into(MovieDatabase.TABLE_NAME)

        }catch(err:any){
            throw new Error(err.message);
        }

    }
}