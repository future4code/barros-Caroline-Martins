console.log("Exercicio 1");

const nome=process.argv[2];
const data= process.argv[3]


function nascimento(nome:string, data:string):string{
    data.split(",")
    return `Olá me chamo ${nome}, nasci no dia ${data.split("/")[0]}
     do mês de ${data.split("/")[1]} do ano de ${data.split("/")[2]}`
}

console.log(nascimento(nome,data))