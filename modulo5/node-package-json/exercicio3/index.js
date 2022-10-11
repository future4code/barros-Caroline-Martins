//exercicio 3
const inserir = process.argv[2]
const listTarefas = ["lavar louça", "fazer almoço"]

function tarefas(inserir) {
    let newList = [].concat(listTarefas, inserir)

    return (newList)
}

const chama = tarefas(inserir)

console.log(chama)