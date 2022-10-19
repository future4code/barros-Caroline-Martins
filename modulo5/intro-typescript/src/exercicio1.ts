console.log("exercicio 1")

const ladoA = Number(process.argv[2])
const ladoB = Number(process.argv[3])
const ladoC = Number(process.argv[4])

function triangulo(ladoA: Number, laboB: Number, ladoC: Number): string {
    if (ladoA !== laboB && laboB !== ladoC) {
       return "Escaleno"
    } else if (ladoA === laboB && laboB === ladoC) {
       return "Equilatero"
    } else {
        return "Isósceles"
    }

}


console.log(triangulo(ladoA, ladoB, ladoC))