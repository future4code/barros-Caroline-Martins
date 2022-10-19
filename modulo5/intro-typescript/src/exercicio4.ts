console.log("exercicio 4")


const n1= Number(process.argv[2]);
const n2= Number(process.argv[3])


function comparaDoisNumero (n1:number, n2:number):number {
    let maiorNumero: number
    let menorNumero: number

    if (n1 > n2){
        maiorNumero = n1 
        menorNumero = n2
    }else{
         maiorNumero = n2
         menorNumero = n1
    }

    const diferenca: number = maiorNumero - menorNumero

return diferenca
}

console.log(comparaDoisNumero(n1, n2))

