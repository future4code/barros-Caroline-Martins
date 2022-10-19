console.log("Exercicio 4")


type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


// b) Como você faria, já com a extensão instalada,
//  para transpilar(converter) esse arquivo typescript em um arquivo javascript?
//Resposta:
// No meu arquivo package.json eu converto com o comando 
//"start": "tsc && node ./build/exercicio1.js"

//c) E se este arquivo estivesse dentro de uma pasta chamada src.
// O processo seria diferente? Se sim, descreva as diferenças.
//Resposta:
// Nas configurações vc vai ter essa opção (nas aspas voce pode definir o diretorio que quiser)
// "rootDir": "./src" nela vc especifica o diretorio raiz e o proprio programa procura

//d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// no primeiro exercicio lembro que usei somente o tsc
// após entendi melhor o script 