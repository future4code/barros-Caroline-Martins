import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function createZipcode(req: Request, res: Response): Promise<void> {
    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = req.body
    let erroCode = 400;

    try {
        
        const insertInfo = await connection.raw(`
            INSERT INTO user_address (cep, logradouro, numero, complemento, bairro, cidade, estado)
            VALUES ('${cep}', '${logradouro}', '${numero}', '${complemento}', '${bairro}', '${cidade}', '${estado}')
        `);
        
        res.status(200).send("usuario criado!")

    } catch (erro: any) {
        res.status(erroCode).send(erro.message)
    }

}