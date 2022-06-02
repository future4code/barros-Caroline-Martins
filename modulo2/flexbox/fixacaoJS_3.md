```Javascript
// exercicio HORRIVEL
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
 let contagem=0
  for(let i =0;i<arrayDeNumeros.length;i++){
    if(arrayDeNumeros[i] == numeroEscolhido){
      contagem++
    }
  } if (contagem>0){
    return `O número ${numeroEscolhido} aparece ${contagem}x`
  }else { return "Número não encontrado"
  }
}