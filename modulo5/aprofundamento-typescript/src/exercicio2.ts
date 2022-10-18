console.log("exercicio 2")


function obterEstatisticas(numeros:number[]):any {
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


