// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()

  //DESAFIO
// let ordem = array.sort((a,b) =>{
//     return b - a
    //  })
//return ordem 
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordem = array.sort((a,b) =>{
        return a - b
     })
return ordem
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
let numerosPares=[] 
    for (let numerosPares1 of array) {
        if ((numerosPares1 % 2 === 0)) {

            numerosPares.push(numerosPares1)
        }

    }
return numerosPares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
let numerosPares=[] 
    for (let numerosPares1 of array) {
        if ((numerosPares1 % 2 === 0)) {

            numerosPares.push(numerosPares1 * numerosPares1)
        } 
    }
return numerosPares  
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = Math.max(...array)
    return maiorNumero
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero 
    let menorNumero  
        if (num1 < num2){
            maiorNumero = num2
        } else {
            maiorNumero = num1
        }if (num1 > num2){
         menorNumero = num2
        }else{
        menorNumero = num1
         }
    let divisivel =maiorNumero % menorNumero=== 0
    let diferente = maiorNumero - menorNumero
return  retornaObjeto = {
        maiorNumero: maiorNumero ,
        maiorDivisivelPorMenor:divisivel,
        diferenca: diferente
    }
        
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
let numerosPares=[] 
    for (let i = 0; n > numerosPares.length;i++) {
        if ((i % 2 === 0)) {

         numerosPares.push(i)
        
        }

}
return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
        return "Equilátero"
    } else if(ladoA === ladoC && ladoA !== ladoB || ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoA !== ladoB){
        return "Isósceles"
    }  if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordem = array.sort((a,b) =>{
        return a - b
     })
array = ordem
segundoMaior = array[array.length-2]
segundoMenor = array[1]
return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme= {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'] }
    
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
let pessoaAnonima = {
        ...pessoa,
       nome: "ANÔNIMO",
  }
return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
let pessoaAutorizada = []
    for(usuario of pessoas){
        if(usuario.altura >= 1.5 && (usuario.idade > 14 && usuario.idade < 60)){
            pessoaAutorizada.push(usuario)
        }
    }
return pessoaAutorizada
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
let pessoaNaoAutorizada = []
    for(usuario of pessoas){
        if(usuario.altura < 1.5 || (usuario.idade <= 14 || usuario.idade >= 60)){
            pessoaNaoAutorizada.push(usuario)
        }
    }
return pessoaNaoAutorizada
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
consultas.sort((a,b)=>{
    if (a.nome < b.nome){
     return -1}
    
        })
return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   //     consultas.sort((a,b)=>{
//         if (a.dataConsulta > b.dataConsulta){
//             return -1}
//             else{
//                 return 1
//             }
    
//          })
// return consultas
}