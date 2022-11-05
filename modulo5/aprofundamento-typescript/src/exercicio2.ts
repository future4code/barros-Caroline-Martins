console.log("exercicio 2")

type Estatistica={
    maior: number,
    menor: number,
    media: number,
}

function obterEstatisticas(numeros:number[]):Estatistica {
//a) como entrada tem que ser um array de numeros pois ja é esperado isso
//o proprio metodo sort nao aceitou
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
//b) variavel soma tipagem number
    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([2,6,8]))


//b
type Amostra={
    numeros: number[],
    obterEstatisticas: (numeros:number[] )=>Estatistica
}
const amostras: Amostra={
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
}
console.log(amostras.obterEstatisticas(amostras.numeros))