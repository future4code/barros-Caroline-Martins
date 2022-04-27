
//EXERCICIO INTERPRETACAO
//1.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
//A.
//console ira imprimir item 0 da array elenco: Matheus Nachtergaele
//B.
//console ira imprimir o ultimo item da array elenco: Virginia Cavendish(length-1)
//C.
//console ira imprimir o item 2 da array transmissoesHoje: canal:Globo Horario:14


//2.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)
// //A.
//console ira imprimir tudo o que esta dentro do objeto cachorro
//B.
//console ira imprimir tudo o que esta dentro do cachorro trocando o nome por Juba
//C.
//console ira imprimir tudo o que esta dentro do gato trocando as letras (a) por letras (o)
//D.
//a sintaxe dos 3 pontos serve para copiar caracteristicas ja dadas para o objeto

//3.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
//nesse caso tive que imprimir para pode entender melhor
//primeiro vai imprimir FALSE por conta que foi o que atribuiram a backender
//segundo vai ser indefinido POIS NÃO FOI DADO NENHUMA ALTURA

//EXERCICIO DE ESCRITA DE CODIGO

//1.

let alguem = {
    pessoa:"Ane",
    apelido:["nani", "nanica", "mana"],
}

function amor(filha){
    console.log(`Eu sou ${filha.pessoa} mas pode me chamar de: ${filha.apelido[0]} , ${filha.apelido[1]} ou ${filha.apelido[2]}`)

}


let alguem2 = {
  
    ...alguem,
    apelido : ["amorzinho", "xuxu" , "negra"]
     
}
amor(alguem2)
//2.

let dados = {
    nome: "Ane",
    idade: 10,
    profissao:"estudante",
    
}
 let dados2 = {
        nome:"lorenzo",
        idade:3,
        profissao: "bagunca",
    }
function dados1(dados){
    return [dados.nome , dados.nome.length ,dados.idade , dados.idade.length , dados.profissao , dados.profissao.length,dados2.nome, dados2.nome.length, dados2.idade, dados2.profissao, dados2.profissao.length] 

    
}
console.log(dados1(dados))


// FIZ 2 FORMAS DIFERENTES DO EXERCICIO APOS VER QUE PEDIA SOMENTE 1 ARRAY
// let dados2 = {
//     nome:"lorenzo",
//     idade:3,
//     profissao: "bagunca",
// }
// function dados3(dados2){
//     return [dados2.nome, dados2.idade, dados2.profissao]
// }
// dados3(dados2)
// console.log([dados2.nome, dados2.nome.length, dados2.idade, dados2.profissao, dados2.profissao.length])

//3.

let carrinho = []

    let fruta={
        nome:"mamao" , disponivel:true,
    }
        let fruta1={
            nome:"morango" , disponivel:true,
        }
            let fruta2={
                nome:"abacaxi" , disponivel:true,
            }
     
function sacolao (frutas){
     carrinho=[fruta, fruta1, fruta2]
     return carrinho
       
}
carrinho=sacolao()
console.log(carrinho)

//DESAFIO
function usuario(nome,idade,profissao){
    nome = prompt("Qual seu nome?"),
    idade = prompt("Qual sua idade?"),
    profissao = prompt("Qual sua profissão?")

    let usuario={
    nome: nome,
    profissao: profissao,
    idade: idade
    }

console.log(usuario, typeof usuario)

}
usuario()
