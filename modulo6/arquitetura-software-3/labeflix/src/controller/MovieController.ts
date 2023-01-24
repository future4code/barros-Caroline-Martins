import { Request, Response } from "express"
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {
    create = async (req: Request, res: Response):Promise<void> => {
        try {
            const input:MovieInputDTO = {
                title:req.body.title,
                description:req.body.description,
                durationInMinutes:req.body.durationInMinutes,
                yearOfRelease:req.body.yearOfRelease}
                
            const movieBusiness = new MovieBusiness()

            await movieBusiness.create(input)

            res.status(201).send(`Movie cadastrado com sucesso!`);
        }catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    getAll = async (req:Request, res:Response)=>{
        try{
  
          const movieBusiness = new MovieBusiness()
  
          const movies = await movieBusiness.getAll()
  
          res.status(200).send(movies)
  
        }catch(err:any){
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
  
    }
}