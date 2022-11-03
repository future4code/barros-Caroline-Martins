console.log("EXERCICIOS  ");
import express, { Request, Response } from "express"
import { Produtc } from "./data";

import cors from 'cors'
import e from "express";

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

// app.post("/novo/produto", (req: Request, resp: Response) => {
//     const token = req.headers.authorization
//     const { name, price } = req.body

//     let newProduct = Produtc

//     if (!token) {
//         resp.status(400).send("Não ha token authorization.")
//     } else if (!name || !price) {
//         resp.status(400).send("Informações de body incorretas.")
//     } else {
//         newProduct.push({
//             id: Date.now().toString(),
//             name: name,
//             price: price
//         })
//         resp.status(200).send(newProduct)
//     }
// })

//EXERCICIO 5

app.get("/produtos", (req: Request, resp: Response) => {
    resp.status(200).send(Produtc)
})

//EXERCICIO 6

// app.put("/editar/:id", (req: Request, resp: Response) => {
//     const edit = req.params.id
//     const { price } = req.body
//     const editarProdutc = Produtc.filter((i) => {
//         i.id === edit
//     })

//     if (!edit) {
//         resp.status(401).send("Verificar parametro")
//     }
//     for (let i = 0; i < Produtc.length; i++) {
//         if (Produtc[i].id === edit) {
//             Produtc[i].price = price
//             editarProdutc.push(...Produtc)

//         }
//     }

//     resp.status(201).send(editarProdutc)
//     console.log(editarProdutc);

// })

// EXERCICIO 7

// app.delete("/deletar", (req: Request, resp: Response) => {
//     const idDelet = req.query.id

//     if (!idDelet) {
//         resp.status(401).send("Verificar Id do usuario!")
//     }
//     const index = Produtc.findIndex((i) => {
//         return i.id === idDelet
//     })
//     Produtc.splice(index, 1)

//     resp.status(201).send(Produtc)
// })

//Exercicio 8

//REFATURAR O CODIGO EXERCICIO 4

app.post("/novo/produto", (req: Request, resp: Response) => {
    const token = req.headers.authorization
    const { name, price } = req.body
    try {
        if (!token) {
            const erro = new Error("Não possui token de authorization ")
            erro.name = "produtcInvalid"
            throw erro
        }
        if (!name) {
            const erro = new Error("Não possui name.")
            erro.name = "produtcInvalid"
            throw erro
        }
        if (!price) {
            const erro = new Error("Não possui preço.")
            erro.name = "produtcInvalid"
            throw erro
        }
        if (typeof name !== "string") {
            const erro = new Error("Nome deve ser uma string.")
            erro.name = "produtcInvalid"
            throw erro
        }
        if (typeof price !== "number") {
            const erro = new Error("Preço dever ser um número.")
            erro.name = "produtcInvalid"
            throw erro
        }
        if (price < 0) {
            const erro = new Error("Preço deve ser maior que 0(ZERO).")
            erro.name = "produtcInvalid"
            throw erro
        }
        else {
            let newProduct = Produtc
            newProduct.push({
                id: Date.now().toString(),
                name: name,
                price: price
            })
            resp.status(200).send(newProduct)
        }
    } catch (erro: any) {
        if (erro.name === "produtcInvalid") {
            resp.status(422).send(erro.message)
        } else {
            resp.status(500).send(erro.message)
        }

    }
})

//EXERCICIO 9

//REFATURAR EXERCICIO 6

app.put("/editar/preco/:id", (req: Request, resp: Response) => {
    const edit = req.params.id
    const { price } = req.body
    console.log(price , edit);

    try {
        const editarProdutc = Produtc.filter((i) => { i.id === edit })

        if (!edit ) {
            const erro = new Error("Não possui ID.")
            erro.name = "IdNot"
            throw erro
        }
        // if (editarProdutc.length = 0) {
        //     const erro = new Error("Não possui esse produto, por favor verificar ID")
        //     erro.name = "ProductNot"
        //     throw erro
        // }
        if (!price || price === undefined ) {
            const erro = new Error("Não possui preço")
            erro.name = "PriceUndefined"
            throw erro
        }
        if (typeof price !== 'number') {
            const erro = new Error("Preço deve ser um numero.")
            erro.name = "PriceNot"
            throw erro
        }
        if (price < 0) {
            const erro = new Error("Preço dever ser maior que 0(zero).")
            erro.name = "Price"
            throw erro
        }

        for (let i = 0; i < Produtc.length; i++) {
            if (Produtc[i].id === edit) {
                Produtc[i].price = price
                editarProdutc.push(...Produtc)
                console.log(editarProdutc);
            }
            resp.status(201).send(editarProdutc)
        }

    } catch (er: any) {
        if (er.name == "IdNot") {
            resp.status(404).send(er.message)
        }if (er.name === "PriceNot") {
            resp.status(422).send(er.message)
        }  if (er.name === "ProductNot") {
            resp.status(422).send(er.message)
        } if(er.name === "PriceUndefined"){
            resp.status(422).send(er.message)
        } if (er.name === "Price") {
            resp.status(422).send(er.message)
        }
    }
})

//EXERCICIO 10

app.delete("/deletar", (req: Request, resp: Response) => {
    const idDelet = req.query.id
    try {
        const filtro = Produtc.filter((i) => {
            i.id === idDelet
        })
        if (filtro.length === 0) {
            const erro = new Error("Não possui no array")
            erro.name = "IdNotLength"
            throw erro
        } if (!idDelet) {
            const erro = new Error("Não possui ID")
            erro.name = "IdNot"
            throw erro
        }
        const index = Produtc.findIndex((i) => {
            return i.id === idDelet
        })
        Produtc.splice(index, 1)

        resp.status(201).send(index)
    } catch (er: any) {
        if (er.name === "IdNot") {
            resp.status(404).send(er.message)
        } if (er.name === "IdNotLength") {
            resp.status(404).send(er.message)
        }

    }

})



app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});