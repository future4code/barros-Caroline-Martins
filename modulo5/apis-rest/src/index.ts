console.log("EXERCICIO APIS REST");

import express, { Request, Response } from "express"

import cors from 'cors'
import { users } from "./data";

const app = express()

app.use(express.json())

app.use(cors())

//EXERCICIO 1

//arquivo data.ts

//a. Qual método HTTP você deve utilizar para isso? Metodo GET por se tratar de uma busca

//b. Como você indicaria a entidade que está sendo manipulada? Indicaria "/users"

app.get("/users", (req: Request, resp: Response) => {
    resp.status(200).send(users)
})


//EXERCICIO 2
app.get("/user/", (req: Request, resp: Response) => {
    let errorCode = 400
    try {
        const typeUser = req.query.type;

        const user = users.filter((i) => {
            return i.type.toUpperCase() === typeUser
        })
        console.log(user);

        if (user.length === 0) {
            errorCode = 404
            throw new Error("Não possui esse usuario.");
        }
        if (!user) {
            errorCode = 404
            throw new Error("Não possui esse usuario.");
        }


        resp.status(200).send(user)

    } catch (erro: any) {
        resp.status(errorCode).send(erro.message)
    }
})

//EXERCICIO 3
app.get("/user/:id",(req: Request, resp: Response )=>{
    let errorCode= 400
    try{

    }catch{

    }
})

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});