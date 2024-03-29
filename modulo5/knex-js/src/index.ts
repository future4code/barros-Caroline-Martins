import connection from "./connection/connection"
import express from "express"
import { Request, Response } from "express"

import cors from 'cors'
import { info, log } from "console"

const app = express()

app.use(express.json())

app.use(cors())

console.log("KNEX");

// ---- EXERCICIO 1 ----
//Vamos começar vendo um pouco do knex.
//Depois de toda a configuração, podemos usar a variável connection para fazer queries no banco. 
//a)
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id

        console.log(await connection.raw(id))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
// *CODIGO RETORNA UNDEFINED* 
//TEM VARIOS ERROS DE SINTAXE FALTA PASSAR A TABELA

// b)) Faça uma função que busque um ator pelo nome;

app.get("/actors", async (req: Request, res: Response): Promise<any> => {
    const nome = req.query.nome as string
    let result;
    try {
        if (!nome) {
            result = await connection.raw(`select * FROM Actor`)
        }
        if (nome) {
            result = await connection.raw(`
            SELECT * FROM Actor WHERE nome = "${nome}"
          `)
        }
        res.status(200).send(result[0])
    } catch (er: any) {
        res.status(er).send(er.message)
    }
})

//c) Faça uma função que receba um gender
// retorne a quantidade de itens na tabela Actor com esse gender.
// Para atrizes, female e para atores male.

app.get("/actor/gender", async (req: Request, res: Response): Promise<void> => {
    const gender = req.query.gender
    let errorCode = 400;
    let result;
    try {
        if (!gender) {
            errorCode = 422;
            result = await connection.raw(`select * FROM Actor`)
        }
        if (gender !== "male" && gender !== "famale") {
            errorCode = 422;
            throw new Error("Não possui esse genero, por favor informar male ou female");
        }

        result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);

        const count = result[0][0].count;

        res.status(200).send(`Possui ${count} desse gênero.`)
    } catch (er: any) {
        res.status(errorCode).send(er.message)
    }
})


// ---- EXERCICIO 2 ----

//Agora vamos treinar um pouco os query builders.

//a)Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

app.put("/salary", async (req: Request, res: Response): Promise<void> => {
    const { salary, id } = req.body;
    let errorCode = 400;
    try {
        if (!salary || !id) {
            errorCode = 422;
            throw new Error("Parametros incorretos");
        }
        await connection("Actor").update({
            salary: salary
        }).where({
            id: id
        })

        res.status(200).send("Salario modificado com sucesso!")

    } catch (erro: any) {
        res.status(errorCode).send(erro.message);
    }
})

//b)Uma função que receba um id e delete um ator da tabela

app.delete("/delete/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    let errorCode = 400;

    try {
        if (!id) {
            errorCode = 422;
            throw new Error("Não possui parametro ID.");
        }

        const verificaId = await connection.raw(`
                select id from Actor where id = ${id}
            `)
        if (verificaId[0].length === 0) {
            errorCode = 422;
            throw new Error("Não possui esse ID de cadastro.");
        }
        //desativar a checagem de chave estrangeria 
        await connection.raw(`
            set foreign_key_checks = 0;
            `)
        await connection("Actor").delete().where({ id: id })

        res.status(201).send("Ator deletado.")

    } catch (erro: any) {
        res.status(errorCode).send(erro.message)
    }

})

//c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

app.get("/salary/:gender", async (req: Request, res: Response): Promise<void> => {
    const gender = req.params.gender;
    let errorCode = 400;
    let result;

    try {
        if (!gender) {
            errorCode = 422
            throw new Error("Não possui parametro");
        }
        if (gender !== "male" && gender !== "female") {
            errorCode = 422;
            throw new Error("Por favor inserir female ou male.");
        }
        result = await connection("Actor").avg("salary as average").where({ gender })
        console.log(result);

        res.status(200).send(`A media salarial é de ${result[0].average}`)

    } catch (erro: any) {
        res.status(erro).send(erro.message)
    }
})


// ---- EXERCICIO 3 ----

//a) Crie um endpoint com as especificações abaixo
//Queremos criar um método GET que receba como *path param* o *id* do ator cujas informações queremos pegar. Para isso, devemos:

//- Usar o método  `get` do express
//- Definir o *path param* com a **chave id: 
//`/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`

app.get("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id as string
    let errorCode = 400;
    let result;

    try {
        if (!id) {
            errorCode = 422;
            throw new Error("Não possui parametro.");
        }
        const verificaId = await connection.raw(`
                select id from Actor where id = ${id}
        `)
        if (verificaId[0].length === 0) {
            errorCode = 422;
            throw new Error("Não possui esse ID de cadastro.");
        }

        result = await connection("Actor").where({ id })

        res.status(200).send(result);
    } catch (erro: any) {
        res.status(erro).send(erro.message)
    }
})


//b) Crie um endpoint agora com as seguintes especificações:

// - Deve ser um GET (`/actor`)
// - Receber o gênero como um *query param* (`/actor?gender=`)
// - Devolver a quantidade de atores/atrizes desse gênero

app.get("/actor", async (req: Request, resp: Response): Promise<void> => {
    const gender = req.query.gender;
    let errorCode = 400;
    let result

    try {
        if (!gender) {
            errorCode = 422;
            throw new Error("Não possui parametro.");
        }

        result = await connection("Actor").count("*").where({ gender: gender })

        resp.status(200).send(result)

    } catch (erro: any) {
        resp.status(erro).send(erro.message)
    }
})

// ---- EXERCICIO 4 ----

//- a) Endpoint para atualizar salário com id
//- Deve ser um PUT (`/actor`)
//- Receber o salário e o id pelo body
// - Simplesmente atualizar o salário do ator com id em questão

app.put("/actor", async (req: Request, res: Response): Promise<void> => {
    const { salary, id } = req.body;

    let errorCode = 400;
    try {
        if (!salary || !id) {
            errorCode = 422;
            throw new Error("Parametros incorretos");
        }
        const verificaId = await connection.raw(`
                select id from Actor where id = ${id}
        `)
        if (verificaId[0].length === 0) {
            errorCode = 422;
            throw new Error("Não possui esse ID de cadastro.");
        }

        await connection("Actor").update({
            salary: salary
        }).where({
            id: id
        })

        res.status(200).send("Salario modificado com sucesso!")

    } catch (erro: any) {
        res.status(errorCode).send(erro.message);
    }
})


//- b) Endpoint para deletar ator da tabela
// - Deve ser um DELETE (`/actor/:id`)
// - Receber id do ator como *path param*
// - Simplesmente deletar o ator da tabela


app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    let errorCode = 400;
    try {
        if (!id) {
            errorCode = 422;
            throw new Error("Não possui parametro ID.");
        }

        const verificaId = await connection.raw(`
            select id from Actor where id = ${id}
        `)
        if (verificaId[0].length === 0) {
            errorCode = 422;
            throw new Error("Não possui esse ID de cadastro.");
        }
        //desativar a checagem de chave estrangeria 
        await connection.raw(`
        set foreign_key_checks = 0;
        `)
        await connection("Actor").delete().where({ id: id })

        res.status(201).send("Ator deletado.")

    } catch (erro: any) {
        res.status(errorCode).send(erro.message)
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});