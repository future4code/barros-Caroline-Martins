console.log("EXERCICIOS  ");
import express, { Request, Response } from "express"
import { Produtc } from "./data";

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//EXERCICIO 1
app.get("/test", (req: Request, resp: Response) => {
    const servidor = "http://localhost:3000"
    resp.status(200).send(`Servidolr rodando na porta ${servidor}`)

})

//EXERCICIO 2

//arquivo data

//EXERCICIO 3

//arquivo type

//EXERCICIO 4

app.post("/novo/produto", (req: Request, resp: Response) => {
    const token = req.headers.authorization
    const { name, price } = req.body

    let newProduct = Produtc

    if (!token) {
        resp.status(400).send("Não ha token authorization.")
    } else if (!name || !price) {
        resp.status(400).send("Informações de body incorretas.")
    } else {
        newProduct.push({
            id: Date.now().toString(),
            name: name,
            price: price
        })
        resp.status(200).send(newProduct)
    }
})

//EXERCICIO 5

app.get("/produtos",(req:Request, resp:Response)=>{
    resp.status(200).send(Produtc)
})

//EXERCICIO 6





app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});