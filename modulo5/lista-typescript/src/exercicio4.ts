console.log("Exercicio 4");

type Colaboradores = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

enum SETOR {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro"
}

const listColaboradores: Colaboradores[] = [
    { nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

function funcionariosMarketing(selecao: Colaboradores[]):Colaboradores[]{
    return selecao.filter((item)=>{
        return item.setor === SETOR.MARKETING && item.presencial === true
    })
}

console.log(funcionariosMarketing(listColaboradores))