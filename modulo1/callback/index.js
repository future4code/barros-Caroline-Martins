//EXERCICIO DE INTERPRETAÇÃO

//1.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
  //A.vai imprimir todos os itens do array nome e apelido


//2.
  // const usuarios = [
  //   { nome: "Amanda Rangel", apelido: "Mandi" },
  //   { nome: "Laís Petra", apelido: "Laura" },
  //   { nome: "Letícia Chijo", apelido: "Chijo" },
  // ]
  
  // const novoArrayB = usuarios.map((item, index, array) => {
  //    return item.nome
  // })
  
  // console.log(novoArrayB)
//A.Vai return e imprimir um array com somentes os nomes. Pois fez item.nome

//3.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
//A.Vai returne imprimir um array com os apelidos menos o "Chijo" pois esta !== CHIJO


//EXERCICIOS DE ESCRITA DE CODIGO

//1.
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]
//A.
const nomeBichos = pets.map((item, index, array)=>{
  return item.nome

})
console.log(nomeBichos)

//B.
const racaSalsicha = pets.filter((item, index, array)=>{
  return item.raca === "Salsicha"

})
console.log(racaSalsicha)

//C.
const descontoPoodle = pets.filter((item, index , array)=>{
   if(item.raca === "Poodle")
  
console.log(`Você ganhou desconto de 10% na tosa ${item.nome}`)

})

//2.
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//A.
const nomeProdutos = produtos.map((nome, categoria, array)=>{
  return nome.nome
})
console.log(nomeProdutos)

//B.
const produtosPromocao = [
  { nome: "Alface Lavada", preco: 2.5 },
  { nome: "Guaraná 2l", preco: 7.8 },
  { nome: "Veja Multiuso",preco: 12.6 },
  { nome: "Dúzia de Banana", preco: 5.7 },
  { nome: "Leite", preco: 2.99 },
  { nome: "Cândida", preco: 3.30 },
  { nome: "Detergente Ypê", preco: 2.2 },
  { nome: "Vinho Tinto", preco: 55 },
  { nome: "Berinjela kg", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", preco: 10.80 }
]
const produtos2 = produtosPromocao.map((item)=>{
  let precoDescontar = item.preco *(5/100)
  let precoComDesconto = item.preco - precoDescontar

 const precoFinal = {
   nome: item.nome,
  preco:precoComDesconto.toFixed(2)
}

  return precoFinal
})
console.log(produtos2)

//C.
const produtos3 = produtos.filter((item,index,preco)=>{
  return item.categoria === "Bebidas"

})
console.log(produtos3)

//D.
const produtos4 = produtos.filter((item,index)=>{
  return item.nome.includes("Ypê")
})
console.log(produtos4)

//E
function filtrar(produtos){
  return produtos.nome.includes("Ypê")
}

function comprar(produtos){
  return`Compre ${produtos.nome} por ${produtos.preco}`
}

let frase=produtos.filter(filtrar)
 frase = frase.map(comprar)
console.log(frase)

//DESAFIO

// const pokemons = [
//   { nome: "Bulbasaur", tipo: "grama" },
//   { nome: "Bellsprout", tipo: "grama" },
//   { nome: "Charmander", tipo: "fogo" },
//   { nome: "Vulpix", tipo: "fogo" },
//   { nome: "Squirtle", tipo: "água" },
//   { nome: "Psyduck", tipo: "água" },
// ]
// //A.
// const pokemons1 = pokemons((item, index)=>{
//   return item.nome.sort()
// })
// console.log(pokemons1)