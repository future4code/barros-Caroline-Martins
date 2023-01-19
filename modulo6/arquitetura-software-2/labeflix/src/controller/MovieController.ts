import { Request, Response } from "express"
import { title } from "process";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
    create = async (req: Request, res: Response) => {
        try {
            const input = req.body

            const movieBusiness = new MovieBusiness()

            await movieBusiness.create(input)

            res.status(201).send(`${title} cadastrado com sucesso!`);
        }catch (err: any) {
            res.status(400).send(err.message);
        }
    }
}