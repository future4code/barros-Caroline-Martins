console.log("EXERCICIOS");
import { users, postagens } from "./data"
import express, { Request, Response } from "express";
import cors from "cors"



const app = express()

app.use(express.json())

app.use(cors())


//Exercicio 1

app.get("/", (req: Request, resp: Response) => {
    resp.status(201).send("Hello from express")
})

//Exercicio 2

//arquivo data

//Exercicio 3

//arquivo data

//Exercicio 4

app.get("/users", (req: Request, resp: Response) => {


    resp.status(201).send(users)
})

//Exercicio 5

//arquivo data

//Exercicio 6

//arquivo data

//Exercicio 7

app.get("/posts", (req: Request, resp: Response) => {
    resp.status(201).send(postagens)
})


//Exercicio 8

app.get("/posts/user/:userId", (req: Request, resp: Response) => {
    const id = req.params.userId
    const userVerifica= postagens.find((post)=>{
        return post.userId === id
    })
    if (!userVerifica) {
         resp.status(401).send("Não possui esse ID")
     }
   
    const post = postagens.filter((postUser) => {
        return postUser.userId === id
    })
   

    console.log(post);
    resp.status(201).send(post)

})

// const userPost = postagens.filter((item)=>{
//     return item.id === id
// })

// console.log(userPost);


// if (!id) {
//     return resp.status(401).send("Não possui esse ID")
// }else{
//   return  i.userId === id
// }

// const post =postagens.filter((i)=>{
//     return i.userId === id
// })

// const id = req.params.userId

// const post = postagens.filter((i) => {
//     if (!id) {
//         resp.status(401).send("Não possui esse ID")
//     }else if (postagens.length === 0) {
//         return  resp.status(401).send("Nenhum resultado")
//     } else {

//         resp.status(201).send(post)
//     }
// })

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");

})


//errado




// const post = postagens.filter((i) => {
//     if(!i.userId === !id){
//         return resp.status(401).send("Não possui esse ID")
//     }else{

//         return i.userId === id
//     }
// })

// console.log(post);
// resp.status(201).send(post)

// })