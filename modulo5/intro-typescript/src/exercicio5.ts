console.log("exercicio 5")


const anoAtual= Number(process.argv[2])
const anoNascimento = Number(process.argv[3])
const anoRG = Number (process.argv[4])

function renovacaoRG(anoAtual:number, anoNascimento:number, anoRG:number):string{
    const idade: Number = anoAtual - anoNascimento
    const tempoRG: Number = anoAtual - anoRG

    if (idade <= 20){
        return tempoRG >= 5 ? "Passou dos 5 anos precisa renovar" : "Ainda não passou os 5 anos."
    }if (idade >= 20 || idade <= 50){
        return tempoRG >= 10? "Passo dos 10 anos precisa renovar" : "Ainda não passou os 10 anos"
    }if (idade > 50){
        return tempoRG >= 15 ? "Passou dos 15 anos precisa renovar" : "Ainda não passou os 15 anos."
    }else {
        return "ERRO!"
    }
}

console.log(renovacaoRG(anoAtual, anoNascimento, anoRG))