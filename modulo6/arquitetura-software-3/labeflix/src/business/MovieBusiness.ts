import { MovieDatabase } from "../data/MovieDatabase";
import { CustomError } from "../error/CustomError";
import { MovieInputDTO, MovieInsertDTO } from "../model/movieDTO";
import { generateId } from "../services/idGerator";

export class MovieBusiness {
    create = async (input: MovieInputDTO): Promise<void> => {
        try {

            if (!input.title || !input.description || !input.durationInMinutes || !input.yearOfRelease) {
                throw new CustomError(400, "Body incorreto verificar (title,  description, durationInMinutes, yearOfRelease) ");

            }
            const id: string = generateId()

            const movieDatabase = new MovieDatabase()

            const insertMovie: MovieInsertDTO = {
                id: id,
                title: input.title,
                description: input.description,
                duration_in_minutes: input.durationInMinutes,
                year_of_release: input.yearOfRelease
            }

            await movieDatabase.create(insertMovie)


        } catch (e: any) {
            throw new CustomError(e.statusCode, e.message)
        }
    }

    getAll = async () => {
        try {
            const movieDatabase = new MovieDatabase()

            const movies = await movieDatabase.getAllMovie()
            return (movies)

        } catch (e: any) {
            throw new CustomError(e.statusCode, e.message)
        }
    }
}