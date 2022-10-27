console.log("EXERCICIOS ");
import express, { Request, Response } from "express"
import cors from 'cors'
import { tarefas } from "./data"
import { send } from "process";


const app = express()

app.use(express.json())

app.use(cors())


//Exercicio 1

app.get("/ping", (req: Request, res: Response) => {
    res.status(201).send("Pong! 🏓")
})

//Exercicio 2

//arquivo data

//Exercicio 3

//arquivo data

//Exercicio 4

app.get("/tarefas", (req: Request, resp: Response) => {
    const status = req.query.completed

    const verificaStatus = tarefas.filter((statu) => {
        if (statu.completed === status) {
            return statu.title
        }
    })

    if (!status) {
        resp.status(201).send("Precisa passar um query sobre status da tarefa!")
    }

    resp.status(201).send(verificaStatus)
})

//Exercicio 5


app.post("/adicionar/tarefa", (req: Request, resp: Response) => {
    const idUser = req.headers.authorization
    const { title, completed } = req.body


    let nova = tarefas
    if (!title || !completed) {
        resp.status(401).send("Verificar informações do body")
    } else if (!idUser) {
        resp.status(401).send("Verificar informações authorization")
    } else {

        nova.push({
            userId: idUser,
            id: Date.now(),
            title: title,
            completed: completed

        })

        resp.status(201).send(nova)
    }

})

//Exercicio 6


app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});