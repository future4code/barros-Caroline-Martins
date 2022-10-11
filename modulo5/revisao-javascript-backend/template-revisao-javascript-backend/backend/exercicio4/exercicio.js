
console.log("exercicio4")


const primeiraLista = [
    {
        nome: "Banana"
    },
    {
        nome: "Laranja"
    },
    {
        nome: "Batata"
    }
]

const segundaLista = [
    {
        nome: "Laranja"
    },
    {
        nome: "Cebola"
    },
    {
        nome: "Cenoura"
    },
    {
        nome: "Batata"
    }
]

function join(oneList, twoList) {
    const newList = [...oneList, ...twoList]
    for (let i = 0; i < newList.length; i++) {
        let verifica = newList[i].nome
        for (let j = i + 1 ; j < newList.length; j++) {
            if (verifica === newList[j].nome) {
                newList.splice(j, 1)
                j--
            }
        }
    }
    return newList
}

console.log(join(primeiraLista, segundaLista))