import connection from "./connection";
import users from "./users.json";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`

    CREATE TABLE aula48_exercicio(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        type VARCHAR(255) NOT NULL
    );
`)
    .then(() => { console.log("Tabela criada") })
    .catch(printError)

const insertUsers = () => connection("aula48_exercicio")
    .insert(users)
    .then(() => { console.log("Usuários criados") })
    .catch(printError)

createTables()
    .then(insertUsers)