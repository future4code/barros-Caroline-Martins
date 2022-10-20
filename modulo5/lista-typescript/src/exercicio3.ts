console.log("Exercicio 3");


type Catalago = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

function filmes(nome: string, anoLancamento: number, genero: GENERO, pontuacao?: number): Catalago {
    let filme: Catalago = {
        nome: nome,
        anoLancamento: anoLancamento,
        genero: genero,
        
    }
    if (!pontuacao) {
        return filme
    }else {
        filme = {
            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero,
            pontuacao:pontuacao
        }
    }
    return filme

}

console.log(filmes("God of War", 2018, GENERO.ACAO))
console.log(filmes("God of War", 2018, GENERO.ACAO, 10))