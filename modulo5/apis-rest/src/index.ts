console.log("EXERCICIO APIS REST");

import express, { Request, Response } from "express"

import cors from 'cors'
import { users } from "./data";
import { UserType } from "./type";

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
        const typeUser = req.query.type as string;


        const user = users.filter((i) => {
            return i.type.toUpperCase() === typeUser.toUpperCase()
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
app.get("/user/name",(req: Request, resp: Response )=>{
    let errorCode= 400
    try{
        const name= req.query.name as string
        
        const userName = users.filter((i)=>{
            return i.name.toUpperCase() === name.toUpperCase()
        })
        if(userName.length === 0){
            errorCode = 404
            throw new Error("Não possui esse usuario.");
        }
resp.status(200).send(userName)

    }catch(erro: any){
        resp.status(errorCode).send(erro.message)
    }
})

//EXERCICIO 4

app.put("/new/user",(req: Request, resp: Response)=>{
    let errorCode = 400
    try{
        const {name, email, type, age} = req.body

        if(!name || !email ||!type ||!age){
            errorCode = 404
            throw new Error("Body preenchido incorretamente.");
        }
        if(type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL"){
            errorCode = 402
            throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL ");
        }
        if(typeof name!== "string"){
            errorCode= 404
            throw new Error("Name tem que ser uma string.")
        }
        if(typeof email!== "string"){
            errorCode= 404
            throw new Error("Email tem que ser uma string.")
        }
        if(typeof age!== "number"){
            errorCode= 404
        throw new Error("Age tem que ser um number.")
        }
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            type: type.toUpperCase(),
            age:age       
         }
         users.push(newUser)

         resp.status(201).send(newUser)
    }catch(erro: any){
        resp.status(errorCode).send(erro.message)
    }
})
//b. Você considera o método PUT apropriado para esta transação? Por quê?
//Não percebi diferenca entra fazer com PUT e POST Mas semanticamente acredito
//ser o ideal o PUT pois estamos COLOCANDO novo usuario

//EXERCICIO 7

app.delete("/delete/:id", (req:Request, resp:Response) => {
    let errorCode = 400
    try{
        const delet = Number(req.path)

        const deleteUser = users.filter((i)=>{
            return i.id === delet
        })
       
        
        if(deleteUser.length = 0){
            errorCode = 404
            throw new Error("Não possui esse usuario.");
        }

        const indexUser = users.findIndex((i) => {
            return i.id === delet
        })

        users.splice(indexUser, 1)
    console.log(indexUser);

        resp.status(200).send(users)
        console.log(users);
    }catch(erro:any){
        resp.status(errorCode).send(erro.message)
    }
})

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});