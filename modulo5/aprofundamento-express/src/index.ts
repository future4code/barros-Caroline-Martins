console.log("EXERCICIOS ");
import express, { Request, Response } from "express"
import cors from 'cors'
import { tarefas } from "./data"



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
        if (status === "true") {
            return statu.completed === true
        } else if (status === "false") {
            return statu.completed === false
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

app.put("/editar/:id", (req: Request, resp: Response) => {
    const edit = Number(req.params.id)
    console.log(edit);

    if (!edit) {
        resp.status(401).send("Verificar parametro")
    }

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id === edit) {
         tarefas[i].completed = !tarefas[i].completed
        }
    }

    resp.status(201).send(tarefas)
})


app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});