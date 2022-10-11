// exercicio 2

//TEM 2 TIPOS DE LOGICA PQ COMECEI UMA NAO FUNCIONAVA E DAI FIZ OUTRA DEPOIS AS 2 FUNCIONARAM 
const operacao = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

function matematica(operacao, n1, n2){
    if(operacao == "add"){
        return n1+n2
    }if (operacao == "sub"){
        return n1-n2
    }if(operacao == "mult"){
        return  n1*n2
    }if(operacao == "div"){
        return n1/n2
    }
}
const ope= matematica(operacao, n1,n2)
console.log(ope)


// function matematica(operacao, n1, n2) {
//     switch (operacao) {
//         case "add":
//            return  n1 + n2;
//         case "sub":
//            return n1 - n2;
//         case "mult":
//           return  n1*n2;
//         case "div":
//             n1/n2
//             break;
//     }

// }

// console.log(matematica(operacao,n1,n2))