// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
 
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt ('Digite a altura!') )
  let largura = Number(prompt ('Digite a largura!') )

  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt('Qual ano atual?'))
  let anoNascimento = Number(prompt('Qual o ano do seu nascimento?'))

  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  const imc = peso / (altura * altura)
  return imc

} 


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual seu nome?")
  let idade = Number(prompt("Qual sua idade?"))
  let email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 =[prompt("cor1"), prompt("cor2"), prompt("cor3")];
  
  console.log(cor1)

  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let maiusculo = string
  return maiusculo.toUpperCase()
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngresso = custo / valorIngresso

  return quantidadeIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  return string2 < string1
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  return array[0]
  
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let remove1 = array.shift()
  let remove2 = array.pop()
  array.push(remove1)
  array.unshift(remove2)
  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase()===string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Qual o ano atual?") )
let anoNascimento = Number(prompt("Qual seu ano de nascimento?") )
let carteiraIdentidade = Number(prompt("Qual ano seu RG foi emitido?"))

let idade = anoAtual - anoNascimento
let 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}