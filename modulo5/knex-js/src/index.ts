import connection from "./connection/connection"
import express from "express"
import { Request, Response } from "express"

import cors from 'cors'

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

  app.get("/users/:id", async (req: Request, res: Response):Promise<any> => {
    try {
      const id = req.params.id
  
      console.log(await connection.raw(id))
  
      res.end()
    } catch (error:any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 
// *CODIGO RETORNA UNDEFINED* 
//TEM VARIOS ERROS DE SINTAXE FALTA PASSAR A TABELA

// b)

app.get("/actor", async (req: Request, res: Response):Promise<any> => {
    const nome = req.query.nome as string
    console.log(nome);
    
    let result;
    let errorCode = 400
    try{
        if(!nome){
            result=await connection.raw(`select * FROM Actor`)
        }
        if(nome){
          result = await connection.raw(`
            SELECT * FROM Actor WHERE nome = "${nome}"
          `)
        }
        console.log(result);
        
        res.status(200).send(result[0])


    }catch(er: any){
        res.status(er).send(er.message)
        console.log(er.message)
;
        
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});