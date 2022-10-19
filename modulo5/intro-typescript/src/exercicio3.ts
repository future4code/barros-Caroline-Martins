console.log("exercicio 3")

const ano = Number(process.argv[2]);

function anoBissexto(ano: number): Boolean {
    if (ano % 400 === 0) {
        return true
    } else if (ano % 4 === 0 && ano % 100 !== 0) {
        return true
    } else {
        return false
    }

}

console.log(anoBissexto(ano))



