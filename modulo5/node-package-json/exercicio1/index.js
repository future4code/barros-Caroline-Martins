// exercicio 1.A

const nome= process.argv[2];
const idade =Number(process.argv[3]);

function data(nome, idade){
        return (`Olá, ${nome}! Você tem ${idade} anos.`)
}
const dados = data(nome, idade)

console.log(dados)

//exercicio 1.B
function idadeSomada(nome ,idade){
        return (`Olá, ${nome}! Você tem ${idade} anos.Em sete anos você terá ${idade + 7}. `)
}

const newIdade = idadeSomada(nome, idade)
console.log(newIdade)