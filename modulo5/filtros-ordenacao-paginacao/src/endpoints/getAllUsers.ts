import { Request, Response } from "express";
import connection from "../data/connection";
import { user } from "../types";

console.log("Filtros- Oredenação-Paginação");

//FIZ TODO EXERCICIO ALTERANDO A MESMA REQUISIÇAO

export async function getAllUsers(req: Request, resp: Response): Promise<void> {
    let errorCode = 400;
    try {
        let name = req.query.name as string;
        //TYPE TEM QUE SER POR PATH MAS NÃO ESTOU CONSEGUINDO ACESSAR POR ELE
        let type = req.query.type as string;
        //PEDIR HELP PLANTÃO
        let sort = req.query.sort as string;
        let order = req.query.order as string;
        let size = Number(req.query.size) as number;
        let page = Number(req.query.page) as number;


        if (!name) {
            name = "%"
        }
        if (!type) {
            type = "%"
        }
        if (order && order.toLowerCase() !== "ASC" && order.toLowerCase() !== "DESC") {
            order = "DESC"
        }
        if (!sort) {
            sort = "email"
        }
        if (sort !== "name") {
            sort = "email"
        }
        if (sort !== "type") {
            sort = "email"
        }
        if (isNaN(page) || page < 1) {
            page = 1
        }
        if (isNaN(size) || size < 1) {
            size = 5
        }

        const offset = size * (page - 1);

        const result = await connection("aula48_exercicio")
            .where("name", "like", `%${name}%`)
            .where("type", "like", `%${type}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

        resp.status(200).send(result);

    } catch (erro: any) {
        resp.status(errorCode).send(erro.message)
    }
}