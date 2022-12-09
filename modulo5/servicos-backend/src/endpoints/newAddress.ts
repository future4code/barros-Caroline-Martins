import { Request, Response } from "express"
import getAddress from "../services/getAddres";
import { Address } from "../types";
import { connection } from "../data/connection";

export default async function newAddress(req: Request, res: Response): Promise<void> {
    let errorCode = 400;
    try {
        const { zipcode, numero, complemento } = req.body;
        if (!zipcode) {
            errorCode = 422;
            throw new Error("Por favor verificar zipcode");
        }
        if (!numero) {
            errorCode = 422;
            throw new Error("Por favor verificar numero");
        }
        if (!complemento) {
            errorCode = 422;
            throw new Error("Por favor verificar complemento");
        }
        const data = await getAddress(zipcode)
        console.log(data);

        const newData: Address = {
            cep: data.cep,
            logradouro: data.logradouro,
            numero: numero,
            complemento: complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado
        }
        const add = await connection("user_address").insert(newData)

        res.status(200).send(`'Endereço cadastrado com sucesso!'`)
    } catch (er: any) {
        res.status(errorCode).send(er.message)
    }
}