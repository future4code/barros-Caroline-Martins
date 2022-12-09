import {connection} from "./connection"
import Users from './users.json'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables =()=> connection
.raw(`
  CREATE TABLE user_address (
      cep VARCHAR(9) NOT NULL,
      logradouro VARCHAR(255) NOT NULL,
      numero VARCHAR(255) NOT NULL,
      complemento VARCHAR(255), 
      bairro VARCHAR(255) NOT NULL, 
      cidade VARCHAR(255) NOT NULL,
      estado VARCHAR(5) NOT NULL
   ); 
 `)
 
  .then(()=>{console.log("Tabela criada com sucesso!")})
  .catch(printError)

  const insertUser = ()=> connection("user_address")
  .insert(Users)
  .then(()=>{console.log("User insertado com sucesso!")})
  .catch(printError)
  
  createTables()
     .then(insertUser)
